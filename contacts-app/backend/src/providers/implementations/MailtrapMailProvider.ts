import { IMailProvider, IMessage } from "../IMailProvider"
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '7c4ec3046d55ec',
        pass: '570f712e0141ff',
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        address: message.to.email,
        name: message.to.name
      },
      from: {
        address: message.from.email,
        name: message.from.name
      },
      subject: message.subject,
      html: message.body,
    })
  }
}