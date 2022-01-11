import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// Import Message Validation
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    // Extract body from request
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    // Extract id from request
    console.log(id);
  }
}
