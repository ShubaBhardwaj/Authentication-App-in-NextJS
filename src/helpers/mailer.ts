import nodemailer from 'nodemailer';
import User from '@/models/user.model';
import bcrypt from 'bcryptjs';


export const sendEmail = async({email, emailType, userId}: {email: string, emailType: string, userId: any})=>{
  try {
    const hashToken = await bcrypt.hash(userId.toString(), 10)

    if(emailType === 'VERIFY'){
        await User.findByIdAndUpdate(userId,{verifyToken: hashToken, verifyTokenExpiry: Date.now() + 3600000})
      } else if (emailType === 'RESET'){
        await User.findByIdAndUpdate(userId,{forgotPasswordToken: hashToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
    }

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 2525,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOption = {
      from: process.env.EMAIL_HOST,
      to: email,  
      subject: emailType === "VERIFY" ? "Verify your email" : "Rest you password",
      html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy past the link below <br> ${process.env.domain}/verifiyemail?token=${hashToken} </p>`
    }

    await transport.verify();
    console.log("✅ Server is ready to take messages");

    const mailResponse = await transport.sendMail(mailOption);
    return mailResponse


  } catch (error: any ) {
    throw new Error(error.message)
  }
}









