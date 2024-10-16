import Image from "next/image";
import Head from 'next/head';
import Header from "../../components/Header"
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import Link from "next/link";

export default async function Home() {
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;
  
  const posts: Post[] = await sanityClient.fetch(query);

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="This is Medium 2.0 Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-black text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">Medium</span> is a place to write, read, and connect</h1>
          <h2 className="text-black">It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
        <img className="hidden md:inline-flex h-32 lg:h-full" src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map(post =>(
          <Link key={post._id} href={'/post/${post.slug.current}'}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img className="h-60 w-full object-cover group-hover:scale-105 transition-reansform duration-200 ease-in-out" src={
                urlFor(post.mainImage).url()!
              } alt="" />
              <div className="flex justify-between p-5 bg-white text-black">
                <div>
                <p className="text-lg font-bold">{post.title}</p>
                <p className="text-xs">
                  {post.description} by {post.author.name}
                </p>
                </div>
                <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


