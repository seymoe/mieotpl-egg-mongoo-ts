// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportV1User from '../../../app/controller/v1/user';

declare module 'egg' {
  interface IController {
    v1: {
      user: ExportV1User;
    }
  }
}
