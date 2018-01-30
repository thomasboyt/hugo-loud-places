# Loud Places v2

This is a work in progress replacement for loudplaces.disco.zone, this time with an emphasis on longer posts, so I can get back to my original goal of actually writing about concerts/wrestling/travelling.

I ported this whole thing to Hugo, since it seemed simpler than my home-grown solution. I dunno if it'll stick (maybe I'll wander off to Gatsby or something), but it's good so far.

Based on the [onetwothree](https://github.com/schollz/onetwothree) theme.

Images are optimized using an included Node script:

```
yarn install
./resize content/path/to/post/*
```

### Checklist

- [x] Port loudplaces.disco.zone concert content to /shows
- [ ] Actually customize the theme