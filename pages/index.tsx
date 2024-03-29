import SinglePost from '../components/Post/SinglePost';
import Tag from '../components/Tag/Tag';
import { getAllPosts, getAllTags, getPostsForTopPage } from '../lib/notionAPI'
import { GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link';

export const getStaticProps: GetStaticProps  = async () => {
  const Posts = await getPostsForTopPage(4);
  const allTags = await getAllTags();

  return {
    props:{
      Posts,
      allTags,
    },
    revalidate: 60,//update by 60sec @ISR
  }
}

export default function Home({Posts, allTags}) {
  return (
    <div className='container h-full w-full mx-auto font-mono'>
      <Head>
        <title>Notion-Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container w-full mt-16">
        <h1 className='text-5xl font-medium text-center mb-16'>Notion Blog🚀</h1>
        {Posts.map((post) => (
          <div className='mx-4' key={post.id}>
            <SinglePost 
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              isPagenationPage={false}
            />
          </div>
        ))}
        <Link href="/posts/page/1" className='mb-6 lg:w-1/2 mx-auto px-5 block text-right'>・・・もっと見る</Link>
        <Tag  tags={allTags}/>
      </main>
    </div>
  )
}
