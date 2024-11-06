import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/app/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;
    if (!email || !name) {
      return NextResponse.json(
        { message: "Email or name is missing" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Mora <info@mora-ed.com>",
      to: [email],
      subject: `hello ${name} from resend`,
      react: EmailTemplate({ email, name }),
    });

    return NextResponse.json({
      message: "Email sent successfully",
      id: data.data?.id,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Email not sent", error: err },
      { status: 500 }
    );
  }
}