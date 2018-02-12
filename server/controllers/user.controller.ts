import { Request, Response, Router } from "express";
import { request } from "http";
import { Controller, Get, Post } from '@decorators/express';
import { Inject } from "@decorators/di/src/decorators/inject";
import { UserRepository } from "../repository/user.repository";
import { NextFunction } from "express-serve-static-core";
import { IUser } from "../models/user.interface";

@Controller('/users')
export class UserController {
  constructor( @Inject(UserRepository) public UserRepository: UserRepository) { }

  @Get('/')
  getUsers(request: Request, response: Response): Promise<Response> {
    return this.UserRepository.find()
      .then((users: IUser[]) => {
        return response.json({ data: users });
      });
  }
}