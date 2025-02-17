import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Alle velden zijn verplicht." }, { status: 400 });
    }

    // nodemailer instellen met jouw Outlook-app-wachtwoord
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com", //Outlook SMTP server
      port: 587, //Gebruik poort 587 voor STARTTLS
      secure: false, // false = STARTTLS gebruiken
      auth: {
        user: "smartventrawindow@outlook.com", // Jouw Outlook e-mail
        pass: "lxgbonizfgtahixx", //Gebruik het nieuw gegenereerde app-wachtwoord
      },
      tls: {
        rejectUnauthorized: false, // Fix voor self-signed certificaten
      },
    });
    
    

    //Stuur e-mail naar bedrijf
    await transporter.sendMail({
      from: "SmartVentraWindow <smartventrawindow@outlook.com>",
      to: "rachad.bouhjar@hotmail.com",
      subject: `Nieuw Contactformulier van ${name}`,
      text: `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`,
      html: `
        <h3>Nieuw bericht van ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong><br>${message}</p>
      `,
    });

    //Stuur bevestigingsmail naar de gebruiker
    await transporter.sendMail({
      from: "SmartVentraWindow <smartventrawindow@outlook.com>",
      subject: "Bevestiging: We hebben je bericht ontvangen!",
      text: `Hallo ${name},\n\nBedankt voor je bericht! We nemen zo snel mogelijk contact met je op.\n\nMet vriendelijke groet,\nHet SmartVentraWindow Team`,
      html: `
        <h3>Hallo ${name},</h3>
        <p>Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.</p>
        <p><strong>Jouw bericht:</strong></p>
        <blockquote>${message}</blockquote>
        <p>Met vriendelijke groet,<br><strong>Het SmartVentraWindow Team</strong></p>
      `,
    });

    return NextResponse.json({ message: "E-mail verzonden!" }, { status: 200 });
  } catch (error) {
    console.error("❌ Fout bij verzenden:", error);
    return NextResponse.json({ error: "Fout bij verzenden." }, { status: 500 });
  }
}
