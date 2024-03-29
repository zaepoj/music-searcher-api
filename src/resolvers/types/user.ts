import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field()
  name: string;
}
