const res = [
  /*here must be pasted the key "hits" from font awesome request*/
]

const styles = {
  solid: 'fas',
  regular: 'far',
  brands: 'fab'
}

const icons = res.map((item) => ({
  name: item?.name,
  family: styles[item?.style]
}))

let text = ''

icons.forEach(
  (icon) =>
    (text += `INSERT INTO public.icons(name, family) VALUES ('${icon.name}', '${icon.family}') ON CONFLICT(name, family) DO NOTHING;\n`)
)

console.log(text)
