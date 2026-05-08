const requiredFields = ["name", "phone", "enquiry", "message", "preferredContact"];

export async function POST(request) {
  try {
    const payload = await request.json();
    const missing = requiredFields.filter((field) => !payload?.[field]);
    if (missing.length > 0) {
      return Response.json(
        { error: `Missing required fields: ${missing.join(", ")}.` },
        { status: 400 }
      );
    }

    return Response.json(
      {
        ok: true,
        received: {
          name: payload.name,
          phone: payload.phone,
          email: payload.email || null,
          country: payload.country || null,
          enquiry: payload.enquiry,
          preferredContact: payload.preferredContact,
          message: payload.message,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
