import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, MinLength } from 'class-validator'

@InputType()
export class CreateCategoryInput {
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(3)
  name: string

  @Field(() => String, { nullable: true, defaultValue: '' })
  description: string
}
