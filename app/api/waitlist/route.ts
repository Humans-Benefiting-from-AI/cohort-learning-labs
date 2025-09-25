import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, role } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // ConvertKit API integration
    const convertKitApiKey = process.env.CONVERTKIT_API_KEY
    const convertKitFormId = process.env.CONVERTKIT_FORM_ID

    if (convertKitApiKey && convertKitFormId) {
      const convertKitResponse = await fetch(
        `https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: convertKitApiKey,
            email,
            first_name: name,
            fields: {
              role: role || 'Not specified'
            }
          }),
        }
      )

      if (!convertKitResponse.ok) {
        console.error('ConvertKit API error:', await convertKitResponse.text())
        return NextResponse.json(
          { error: 'Failed to subscribe to mailing list' },
          { status: 500 }
        )
      }
    } else {
      // Log for development/testing when ConvertKit is not configured
      console.log('Waitlist signup (ConvertKit not configured):', { name, email, role })
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully added to waitlist'
    })

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}