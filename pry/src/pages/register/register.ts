import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import AWS = require('aws-sdk');
import AWS = require('aws-sdk/global');
import S3 = require('aws-sdk/clients/s3');
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {email: '', password: ''};
  constructor(
    public name: string,
    public role: string
  )
}
