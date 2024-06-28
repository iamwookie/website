import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    const hostname = request.nextUrl.hostname;
    const allowed = process.env.AVGEEK_HOSTNAME;

    if (hostname != allowed) return Response.json({ success: false }, { status: 401 });

    const data = await request.formData();
    const name = data.get('name');
    const discord_username = data.get('discord_username');
    const event = data.get('event');

    if (!name || !discord_username || !event) return Response.json({ success: false }, { status: 400 });

    try {
        const webhookUrl = process.env.AVGEEK_EVENTS_WEBHOOK_URL;

        const payload = {
            username: 'Event Registration',
            content: 'New event registration received:',
            embeds: [
                {
                    title: 'Event Registration',
                    color: 16761867, // Hex color code
                    fields: [
                        { name: 'Name', value: name, inline: true },
                        { name: 'Discord Username', value: discord_username, inline: true },
                        { name: 'Selected Event', value: event, inline: true },
                    ],
                },
            ],
        };

        const res = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const err = res.statusText;
            console.error('[API] POST Error: avgeek/events\n' + err);
            return Response.json({ success: false }, { status: res.status });
        }

        return Response.json({ success: true });
    } catch (err) {
        console.error('[API] POST Error: avgeek/events\n' + err);
        return Response.json({ success: false }, { status: 500 });
    }
}
