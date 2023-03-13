import nodemailer from 'nodemailer'

export default async (to, confirmCode) => {
  const transporter = await nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: !!process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
      // type: "OAuth2",
      // method: "XOAUTH2",
      // clientId: "d2f13d7f54....",
      // clientSecret: "56bd7fae1c.....",
      // accessToken: "AQAAAABRe-tlAAhM.....",
    }
  })

  const link = `${process.env.SCHEMA}://${process.env.DOMAIN_NAME}:${process.env.PORT}${process.env.API_BASE}/auth/activation/${confirmCode}`

  await transporter.sendMail({
    from: `${process.env.DOMAIN_NAME} <${process.env.SMTP_USER}>`,
    to,
    subject: `Активация аккаунта на ${process.env.DOMAIN_NAME}`,
    text: '',
    html: `
        <div>
          <h1>Для активации перейдите по ссылке</h1>
          <a href="${link}">${link}</a>
        </div>
      `
  })
}
