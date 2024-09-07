import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'YOUR_EMAIL_ADDRESS',
        pass: 'YOUR_APP_PASSWORD', // Gmail uygulama şifreniz
      },
    });

    const mailOptions = {
      from: email,
      to: 'YOUR_EMAIL_ADDRESS',
      subject: `Mesaj Gönderen kişi: ${fullName}`,
      text: `Mesaj: ${message}\nMail adresi: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
  }
}
