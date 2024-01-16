export default function page({params,}: {params: {slug: string[]}}) {
  if (params.slug?.length === 1) {
    return (
      <>
        <div>Doc {params.slug[0]} </div>
      </>
    )
  } else if (params.slug?.length === 2) {
    return (
      <>
        <div>Doc {params.slug[0]} {params.slug[1]} </div>
      </>
    )
  }
  return (
    <>
      <div>Doc </div>
    </>
  )
}
