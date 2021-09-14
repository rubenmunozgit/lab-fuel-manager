import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: process.env.private_key.replace(/\\n/g, '\n'),
    projectId: process.env.project_id,
    clientEmail: process.env.client_email
  }),
  databaseURL: 'https://fuel-manager-9b4aa.firebaseio.com'
});

export {admin};