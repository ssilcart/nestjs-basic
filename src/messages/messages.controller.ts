import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
