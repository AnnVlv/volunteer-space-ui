import PostFeed from "@/components/posts/PostFeed"
import Header from "@/components/Header"
import Form from "@/components/Form"

export default function Home() {
  return (
    <>
      <Header label="Головна" />
      <Form placeholder="Ваше оголошення" />
      <PostFeed />
    </>
  )
}
