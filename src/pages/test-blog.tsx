import Layout from "@/components/layout/layout"
import { graphql, PageProps } from "gatsby"
import React, { useEffect, useRef, useState } from "react"

interface Node {
  node: {
    id: string
    slug: string
    excerpt: string
    frontmatter: {
      title: string
      date: string
      tags: string[]
      spoiler: string
      length: string
    }
  }
}
interface BlogPageQuery {
  allMdx: {
    edges: Array<Node>
  }
}

const TestBlog = ({ data }: PageProps<BlogPageQuery>) => {
  const {
    allMdx: { edges },
  } = data

  const [list, setList] = useState([...edges.slice(0, 2)])
  const [hasMore, setHasMore] = useState(false)
  const [loadMore, setLoadMore] = useState(edges.length > 2)

  const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null)

  const handleObserver = (entities: any) => {
    const target = entities[0]
    if (target.isIntersecting) {
      setLoadMore(true)
    }
  }

  useEffect(() => {
    const options = {
      root: ref.current,
      rootMargin: "600px",
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (ref.current) {
      observer.observe(ref.current as Element)
    }
  }, [])

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < edges.length
      const nextList = isMore ? edges.slice(currentLength, currentLength + 2) : []
      setList([...list, ...nextList])
      setLoadMore(false)
    }
  }, [edges, hasMore, list, loadMore])

  useEffect(() => {
    const isMore = list.length < edges.length
    setHasMore(isMore)
  }, [edges.length, list])

  console.log(list)
  return (
    <Layout>
      {edges.map((x) => (
        <div style={{ height: 650 }} key={x.node.id}>
          {x.node.frontmatter.title}
        </div>
      ))}
      <div ref={ref}>{hasMore ? <p>Loading...</p> : <p>No more results</p>}</div>
    </Layout>
  )
}

export const BLOG_PAGE_QUERY = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          excerpt
          slug
          frontmatter {
            title
            date
            tags
            spoiler
            length
          }
        }
      }
    }
  }
`

export default TestBlog
