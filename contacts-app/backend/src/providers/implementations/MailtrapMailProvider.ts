import { IMailProvider, IMessage } from "../IMailProvider"
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
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