import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // Send via Resend if API key is set
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "CCONCHAIN Contact <noreply@media4u.fun>",
        to: "jean@cyberchurchonchain.org",
        replyTo: email,
        subject: `CCONCHAIN Contact: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 500px;">
            <h2>New Contact from CCONCHAIN Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
