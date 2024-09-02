import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, name_kana, email, email_confirm, contents } = await req.json()

    if (email !== email_confirm) {
      return NextResponse.json({ message: 'メールアドレスが一致しません' }, { status: 400 })
    }

    // Nodemailerのトランスポート設定
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    })

    // メールの内容を設定
    const mailOptions = {
      from: email,
      to: 'sannsi4444@gmail.com',
      subject: `お問い合わせフォームからのメッセージ: ${name}`,
      text: `名前: ${name}\nフリガナ: ${name_kana}\nメールアドレス: ${email}\n内容:\n${contents}`,
    }

    // メールを送信
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'メールが正常に送信されました' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'メールの送信に失敗しました', error: error.message }, { status: 500 })
  }
}
