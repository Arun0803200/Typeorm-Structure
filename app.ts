import express from 'express';
import * as bodyParser from 'body-parser';
import { appDataSource } from './connection';
import { User } from './Entity/UserEntity';

const createServer = () => {
  appDataSource
    .initialize()
    .then(() => {
      console.log('Database Connected Successfully :)');
    })
    .catch((err) => {
      console.log('Unable to connect the Database', err);
    });
  const app = express();
  app.use(bodyParser.urlencoded({ limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));

  app.get('/api', (req: any, res: any) => {
    return res.status(200).send({
      status: 1,
      message: 'Successfully called the API!',
    });
  });

  app.post('/api/create-user', async (req: any, res: any) => {
    try {
      const payload = req.body;
      const getRepo = appDataSource.getRepository(User);
      const newUser = new User();
      newUser.firstName = payload.firstName;
      newUser.lastName = payload.lastName;
      newUser.username = payload.username;
      const saveData = await getRepo.save(newUser);
      return res.status(200).send({
        status: 1,
        message: 'Successfully create a user',
        data: saveData,
      });
    } catch (err) {
      return res.status(500).send({
        status: 0,
        message: 'Unable to create a user',
      });
    }
  });

  app.listen(3000, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`app is listening on http://localhost:3000`);
  });
};
createServer();
