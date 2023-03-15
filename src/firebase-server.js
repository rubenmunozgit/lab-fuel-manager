import * as admin from 'firebase-admin/app';
import { getAuth as auth } from 'firebase-admin/auth';

admin.initializeApp({
    credential: admin.cert({
        privateKey: process.env.private_key,
        projectId: process.env.project_id,
        clientEmail: process.env.client_email
    }),
    databaseURL: 'https://fuel-manager-9b4aa.firebaseio.com'
});

export { auth };