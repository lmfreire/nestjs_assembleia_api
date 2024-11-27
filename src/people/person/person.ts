import { ApiProperty } from "@nestjs/swagger";

export class Person {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
