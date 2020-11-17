import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    
    if(userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);
    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email
      },
      from: {
        name: 'Alex Sousa',
        email: 'apirest@email.com'
      },
      subject: 'Envio de email',
      body: 'Um body para o email'
    });
  }
}