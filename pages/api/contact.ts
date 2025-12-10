import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { name, email, phone, comments } = req.body;

  if (!name || !email || !comments) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields",
    });
  }

  try {
    // Send email using your server's mail configuration
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || ""}/email.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email,
          phone: phone || "",
          comments,
        }).toString(),
      }
    );

    if (!response.ok) {
      throw new Error("Email service failed");
    }

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again.",
    });
  }
}
