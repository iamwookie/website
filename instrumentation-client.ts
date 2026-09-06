import { initBotId } from 'botid/client/core';

initBotId({
    protect: [
        {
            path: '/api/views/*',
            method: 'POST',
        },
    ],
});
