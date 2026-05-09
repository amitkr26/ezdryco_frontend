# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo-validation.spec.ts >> SEO Validation >> sitemap.xml accessible
- Location: e2e\seo-validation.spec.ts:89:3

# Error details

```
TimeoutError: locator.textContent: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('body pre')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]: This XML file does not appear to have any style information associated with it. The document tree is shown below.
  - generic [ref=e4]:
    - generic [ref=e7]:
      - text: <urlset
      - generic [ref=e8]: xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      - text: ">"
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e13]: <url>
        - generic [ref=e14]:
          - generic [ref=e15]:
            - generic [ref=e16]: <loc>
            - text: https://www.ezdry.in/
            - generic [ref=e17]: </loc>
          - generic [ref=e18]:
            - generic [ref=e19]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e20]: </lastmod>
          - generic [ref=e21]:
            - generic [ref=e22]: <changefreq>
            - text: daily
            - generic [ref=e23]: </changefreq>
          - generic [ref=e24]:
            - generic [ref=e25]: <priority>
            - text: "1.0"
            - generic [ref=e26]: </priority>
        - generic [ref=e28]: </url>
      - generic [ref=e29]:
        - generic [ref=e32]: <url>
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: <loc>
            - text: https://www.ezdry.in/areas-we-serve
            - generic [ref=e36]: </loc>
          - generic [ref=e37]:
            - generic [ref=e38]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e39]: </lastmod>
          - generic [ref=e40]:
            - generic [ref=e41]: <changefreq>
            - text: weekly
            - generic [ref=e42]: </changefreq>
          - generic [ref=e43]:
            - generic [ref=e44]: <priority>
            - text: "0.9"
            - generic [ref=e45]: </priority>
        - generic [ref=e47]: </url>
      - generic [ref=e48]:
        - generic [ref=e51]: <url>
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]: <loc>
            - text: https://www.ezdry.in/services
            - generic [ref=e55]: </loc>
          - generic [ref=e56]:
            - generic [ref=e57]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e58]: </lastmod>
          - generic [ref=e59]:
            - generic [ref=e60]: <changefreq>
            - text: monthly
            - generic [ref=e61]: </changefreq>
          - generic [ref=e62]:
            - generic [ref=e63]: <priority>
            - text: "0.85"
            - generic [ref=e64]: </priority>
        - generic [ref=e66]: </url>
      - generic [ref=e67]:
        - generic [ref=e70]: <url>
        - generic [ref=e71]:
          - generic [ref=e72]:
            - generic [ref=e73]: <loc>
            - text: https://www.ezdry.in/how-it-works
            - generic [ref=e74]: </loc>
          - generic [ref=e75]:
            - generic [ref=e76]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e77]: </lastmod>
          - generic [ref=e78]:
            - generic [ref=e79]: <changefreq>
            - text: monthly
            - generic [ref=e80]: </changefreq>
          - generic [ref=e81]:
            - generic [ref=e82]: <priority>
            - text: "0.75"
            - generic [ref=e83]: </priority>
        - generic [ref=e85]: </url>
      - generic [ref=e86]:
        - generic [ref=e89]: <url>
        - generic [ref=e90]:
          - generic [ref=e91]:
            - generic [ref=e92]: <loc>
            - text: https://www.ezdry.in/pricing
            - generic [ref=e93]: </loc>
          - generic [ref=e94]:
            - generic [ref=e95]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e96]: </lastmod>
          - generic [ref=e97]:
            - generic [ref=e98]: <changefreq>
            - text: monthly
            - generic [ref=e99]: </changefreq>
          - generic [ref=e100]:
            - generic [ref=e101]: <priority>
            - text: "0.8"
            - generic [ref=e102]: </priority>
        - generic [ref=e104]: </url>
      - generic [ref=e105]:
        - generic [ref=e108]: <url>
        - generic [ref=e109]:
          - generic [ref=e110]:
            - generic [ref=e111]: <loc>
            - text: https://www.ezdry.in/plans
            - generic [ref=e112]: </loc>
          - generic [ref=e113]:
            - generic [ref=e114]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e115]: </lastmod>
          - generic [ref=e116]:
            - generic [ref=e117]: <changefreq>
            - text: monthly
            - generic [ref=e118]: </changefreq>
          - generic [ref=e119]:
            - generic [ref=e120]: <priority>
            - text: "0.75"
            - generic [ref=e121]: </priority>
        - generic [ref=e123]: </url>
      - generic [ref=e124]:
        - generic [ref=e127]: <url>
        - generic [ref=e128]:
          - generic [ref=e129]:
            - generic [ref=e130]: <loc>
            - text: https://www.ezdry.in/commercial
            - generic [ref=e131]: </loc>
          - generic [ref=e132]:
            - generic [ref=e133]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e134]: </lastmod>
          - generic [ref=e135]:
            - generic [ref=e136]: <changefreq>
            - text: monthly
            - generic [ref=e137]: </changefreq>
          - generic [ref=e138]:
            - generic [ref=e139]: <priority>
            - text: "0.7"
            - generic [ref=e140]: </priority>
        - generic [ref=e142]: </url>
      - generic [ref=e143]:
        - generic [ref=e146]: <url>
        - generic [ref=e147]:
          - generic [ref=e148]:
            - generic [ref=e149]: <loc>
            - text: https://www.ezdry.in/shoe-cleaning-narnaul
            - generic [ref=e150]: </loc>
          - generic [ref=e151]:
            - generic [ref=e152]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e153]: </lastmod>
          - generic [ref=e154]:
            - generic [ref=e155]: <changefreq>
            - text: monthly
            - generic [ref=e156]: </changefreq>
          - generic [ref=e157]:
            - generic [ref=e158]: <priority>
            - text: "0.65"
            - generic [ref=e159]: </priority>
        - generic [ref=e161]: </url>
      - generic [ref=e162]:
        - generic [ref=e165]: <url>
        - generic [ref=e166]:
          - generic [ref=e167]:
            - generic [ref=e168]: <loc>
            - text: https://www.ezdry.in/carpet-cleaning-narnaul
            - generic [ref=e169]: </loc>
          - generic [ref=e170]:
            - generic [ref=e171]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e172]: </lastmod>
          - generic [ref=e173]:
            - generic [ref=e174]: <changefreq>
            - text: monthly
            - generic [ref=e175]: </changefreq>
          - generic [ref=e176]:
            - generic [ref=e177]: <priority>
            - text: "0.65"
            - generic [ref=e178]: </priority>
        - generic [ref=e180]: </url>
      - generic [ref=e181]:
        - generic [ref=e184]: <url>
        - generic [ref=e185]:
          - generic [ref=e186]:
            - generic [ref=e187]: <loc>
            - text: https://www.ezdry.in/curtain-cleaning-narnaul
            - generic [ref=e188]: </loc>
          - generic [ref=e189]:
            - generic [ref=e190]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e191]: </lastmod>
          - generic [ref=e192]:
            - generic [ref=e193]: <changefreq>
            - text: monthly
            - generic [ref=e194]: </changefreq>
          - generic [ref=e195]:
            - generic [ref=e196]: <priority>
            - text: "0.6"
            - generic [ref=e197]: </priority>
        - generic [ref=e199]: </url>
      - generic [ref=e200]:
        - generic [ref=e203]: <url>
        - generic [ref=e204]:
          - generic [ref=e205]:
            - generic [ref=e206]: <loc>
            - text: https://www.ezdry.in/laundry-service-narnaul
            - generic [ref=e207]: </loc>
          - generic [ref=e208]:
            - generic [ref=e209]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e210]: </lastmod>
          - generic [ref=e211]:
            - generic [ref=e212]: <changefreq>
            - text: monthly
            - generic [ref=e213]: </changefreq>
          - generic [ref=e214]:
            - generic [ref=e215]: <priority>
            - text: "0.8"
            - generic [ref=e216]: </priority>
        - generic [ref=e218]: </url>
      - generic [ref=e219]:
        - generic [ref=e222]: <url>
        - generic [ref=e223]:
          - generic [ref=e224]:
            - generic [ref=e225]: <loc>
            - text: https://www.ezdry.in/dry-cleaning-narnaul
            - generic [ref=e226]: </loc>
          - generic [ref=e227]:
            - generic [ref=e228]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e229]: </lastmod>
          - generic [ref=e230]:
            - generic [ref=e231]: <changefreq>
            - text: monthly
            - generic [ref=e232]: </changefreq>
          - generic [ref=e233]:
            - generic [ref=e234]: <priority>
            - text: "0.8"
            - generic [ref=e235]: </priority>
        - generic [ref=e237]: </url>
      - generic [ref=e238]:
        - generic [ref=e241]: <url>
        - generic [ref=e242]:
          - generic [ref=e243]:
            - generic [ref=e244]: <loc>
            - text: https://www.ezdry.in/laundry-near-me-narnaul
            - generic [ref=e245]: </loc>
          - generic [ref=e246]:
            - generic [ref=e247]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e248]: </lastmod>
          - generic [ref=e249]:
            - generic [ref=e250]: <changefreq>
            - text: monthly
            - generic [ref=e251]: </changefreq>
          - generic [ref=e252]:
            - generic [ref=e253]: <priority>
            - text: "0.7"
            - generic [ref=e254]: </priority>
        - generic [ref=e256]: </url>
      - generic [ref=e257]: <!-- Locality cluster pages -->
      - generic [ref=e258]:
        - generic [ref=e261]: <url>
        - generic [ref=e262]:
          - generic [ref=e263]:
            - generic [ref=e264]: <loc>
            - text: https://www.ezdry.in/adarsh-nagar-laundry
            - generic [ref=e265]: </loc>
          - generic [ref=e266]:
            - generic [ref=e267]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e268]: </lastmod>
          - generic [ref=e269]:
            - generic [ref=e270]: <changefreq>
            - text: weekly
            - generic [ref=e271]: </changefreq>
          - generic [ref=e272]:
            - generic [ref=e273]: <priority>
            - text: "0.75"
            - generic [ref=e274]: </priority>
        - generic [ref=e276]: </url>
      - generic [ref=e277]:
        - generic [ref=e280]: <url>
        - generic [ref=e281]:
          - generic [ref=e282]:
            - generic [ref=e283]: <loc>
            - text: https://www.ezdry.in/mahendragarh-road-laundry
            - generic [ref=e284]: </loc>
          - generic [ref=e285]:
            - generic [ref=e286]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e287]: </lastmod>
          - generic [ref=e288]:
            - generic [ref=e289]: <changefreq>
            - text: weekly
            - generic [ref=e290]: </changefreq>
          - generic [ref=e291]:
            - generic [ref=e292]: <priority>
            - text: "0.75"
            - generic [ref=e293]: </priority>
        - generic [ref=e295]: </url>
      - generic [ref=e296]:
        - generic [ref=e299]: <url>
        - generic [ref=e300]:
          - generic [ref=e301]:
            - generic [ref=e302]: <loc>
            - text: https://www.ezdry.in/shastri-nagar-laundry
            - generic [ref=e303]: </loc>
          - generic [ref=e304]:
            - generic [ref=e305]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e306]: </lastmod>
          - generic [ref=e307]:
            - generic [ref=e308]: <changefreq>
            - text: weekly
            - generic [ref=e309]: </changefreq>
          - generic [ref=e310]:
            - generic [ref=e311]: <priority>
            - text: "0.75"
            - generic [ref=e312]: </priority>
        - generic [ref=e314]: </url>
      - generic [ref=e315]:
        - generic [ref=e318]: <url>
        - generic [ref=e319]:
          - generic [ref=e320]:
            - generic [ref=e321]: <loc>
            - text: https://www.ezdry.in/nasibpur-laundry
            - generic [ref=e322]: </loc>
          - generic [ref=e323]:
            - generic [ref=e324]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e325]: </lastmod>
          - generic [ref=e326]:
            - generic [ref=e327]: <changefreq>
            - text: weekly
            - generic [ref=e328]: </changefreq>
          - generic [ref=e329]:
            - generic [ref=e330]: <priority>
            - text: "0.7"
            - generic [ref=e331]: </priority>
        - generic [ref=e333]: </url>
      - generic [ref=e334]:
        - generic [ref=e337]: <url>
        - generic [ref=e338]:
          - generic [ref=e339]:
            - generic [ref=e340]: <loc>
            - text: https://www.ezdry.in/koriawas-laundry
            - generic [ref=e341]: </loc>
          - generic [ref=e342]:
            - generic [ref=e343]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e344]: </lastmod>
          - generic [ref=e345]:
            - generic [ref=e346]: <changefreq>
            - text: weekly
            - generic [ref=e347]: </changefreq>
          - generic [ref=e348]:
            - generic [ref=e349]: <priority>
            - text: "0.7"
            - generic [ref=e350]: </priority>
        - generic [ref=e352]: </url>
      - generic [ref=e353]:
        - generic [ref=e356]: <url>
        - generic [ref=e357]:
          - generic [ref=e358]:
            - generic [ref=e359]: <loc>
            - text: https://www.ezdry.in/huda-sector-laundry
            - generic [ref=e360]: </loc>
          - generic [ref=e361]:
            - generic [ref=e362]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e363]: </lastmod>
          - generic [ref=e364]:
            - generic [ref=e365]: <changefreq>
            - text: weekly
            - generic [ref=e366]: </changefreq>
          - generic [ref=e367]:
            - generic [ref=e368]: <priority>
            - text: "0.75"
            - generic [ref=e369]: </priority>
        - generic [ref=e371]: </url>
      - generic [ref=e372]:
        - generic [ref=e375]: <url>
        - generic [ref=e376]:
          - generic [ref=e377]:
            - generic [ref=e378]: <loc>
            - text: https://www.ezdry.in/kailash-nagar-laundry
            - generic [ref=e379]: </loc>
          - generic [ref=e380]:
            - generic [ref=e381]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e382]: </lastmod>
          - generic [ref=e383]:
            - generic [ref=e384]: <changefreq>
            - text: weekly
            - generic [ref=e385]: </changefreq>
          - generic [ref=e386]:
            - generic [ref=e387]: <priority>
            - text: "0.75"
            - generic [ref=e388]: </priority>
        - generic [ref=e390]: </url>
      - generic [ref=e391]:
        - generic [ref=e394]: <url>
        - generic [ref=e395]:
          - generic [ref=e396]:
            - generic [ref=e397]: <loc>
            - text: https://www.ezdry.in/housing-board-laundry
            - generic [ref=e398]: </loc>
          - generic [ref=e399]:
            - generic [ref=e400]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e401]: </lastmod>
          - generic [ref=e402]:
            - generic [ref=e403]: <changefreq>
            - text: weekly
            - generic [ref=e404]: </changefreq>
          - generic [ref=e405]:
            - generic [ref=e406]: <priority>
            - text: "0.75"
            - generic [ref=e407]: </priority>
        - generic [ref=e409]: </url>
      - generic [ref=e410]: <!-- Blog hub -->
      - generic [ref=e411]:
        - generic [ref=e414]: <url>
        - generic [ref=e415]:
          - generic [ref=e416]:
            - generic [ref=e417]: <loc>
            - text: https://www.ezdry.in/blog
            - generic [ref=e418]: </loc>
          - generic [ref=e419]:
            - generic [ref=e420]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e421]: </lastmod>
          - generic [ref=e422]:
            - generic [ref=e423]: <changefreq>
            - text: weekly
            - generic [ref=e424]: </changefreq>
          - generic [ref=e425]:
            - generic [ref=e426]: <priority>
            - text: "0.7"
            - generic [ref=e427]: </priority>
        - generic [ref=e429]: </url>
      - generic [ref=e430]: <!-- Blog posts -->
      - generic [ref=e431]:
        - generic [ref=e434]: <url>
        - generic [ref=e435]:
          - generic [ref=e436]:
            - generic [ref=e437]: <loc>
            - text: https://www.ezdry.in/blog/best-laundry-service-narnaul
            - generic [ref=e438]: </loc>
          - generic [ref=e439]:
            - generic [ref=e440]: <lastmod>
            - text: 2025-04-22
            - generic [ref=e441]: </lastmod>
          - generic [ref=e442]:
            - generic [ref=e443]: <changefreq>
            - text: yearly
            - generic [ref=e444]: </changefreq>
          - generic [ref=e445]:
            - generic [ref=e446]: <priority>
            - text: "0.55"
            - generic [ref=e447]: </priority>
        - generic [ref=e449]: </url>
      - generic [ref=e450]:
        - generic [ref=e453]: <url>
        - generic [ref=e454]:
          - generic [ref=e455]:
            - generic [ref=e456]: <loc>
            - text: https://www.ezdry.in/blog/laundry-vs-dry-cleaning-narnaul
            - generic [ref=e457]: </loc>
          - generic [ref=e458]:
            - generic [ref=e459]: <lastmod>
            - text: 2025-04-20
            - generic [ref=e460]: </lastmod>
          - generic [ref=e461]:
            - generic [ref=e462]: <changefreq>
            - text: yearly
            - generic [ref=e463]: </changefreq>
          - generic [ref=e464]:
            - generic [ref=e465]: <priority>
            - text: "0.55"
            - generic [ref=e466]: </priority>
        - generic [ref=e468]: </url>
      - generic [ref=e469]:
        - generic [ref=e472]: <url>
        - generic [ref=e473]:
          - generic [ref=e474]:
            - generic [ref=e475]: <loc>
            - text: https://www.ezdry.in/blog/affordable-laundry-narnaul
            - generic [ref=e476]: </loc>
          - generic [ref=e477]:
            - generic [ref=e478]: <lastmod>
            - text: 2025-04-18
            - generic [ref=e479]: </lastmod>
          - generic [ref=e480]:
            - generic [ref=e481]: <changefreq>
            - text: yearly
            - generic [ref=e482]: </changefreq>
          - generic [ref=e483]:
            - generic [ref=e484]: <priority>
            - text: "0.55"
            - generic [ref=e485]: </priority>
        - generic [ref=e487]: </url>
      - generic [ref=e488]:
        - generic [ref=e491]: <url>
        - generic [ref=e492]:
          - generic [ref=e493]:
            - generic [ref=e494]: <loc>
            - text: https://www.ezdry.in/blog/winter-laundry-narnaul
            - generic [ref=e495]: </loc>
          - generic [ref=e496]:
            - generic [ref=e497]: <lastmod>
            - text: 2025-04-15
            - generic [ref=e498]: </lastmod>
          - generic [ref=e499]:
            - generic [ref=e500]: <changefreq>
            - text: yearly
            - generic [ref=e501]: </changefreq>
          - generic [ref=e502]:
            - generic [ref=e503]: <priority>
            - text: "0.5"
            - generic [ref=e504]: </priority>
        - generic [ref=e506]: </url>
      - generic [ref=e507]:
        - generic [ref=e510]: <url>
        - generic [ref=e511]:
          - generic [ref=e512]:
            - generic [ref=e513]: <loc>
            - text: https://www.ezdry.in/blog/same-day-laundry-narnaul
            - generic [ref=e514]: </loc>
          - generic [ref=e515]:
            - generic [ref=e516]: <lastmod>
            - text: 2025-04-12
            - generic [ref=e517]: </lastmod>
          - generic [ref=e518]:
            - generic [ref=e519]: <changefreq>
            - text: yearly
            - generic [ref=e520]: </changefreq>
          - generic [ref=e521]:
            - generic [ref=e522]: <priority>
            - text: "0.5"
            - generic [ref=e523]: </priority>
        - generic [ref=e525]: </url>
      - generic [ref=e526]:
        - generic [ref=e529]: <url>
        - generic [ref=e530]:
          - generic [ref=e531]:
            - generic [ref=e532]: <loc>
            - text: https://www.ezdry.in/blog/narnaul-hard-water-damage
            - generic [ref=e533]: </loc>
          - generic [ref=e534]:
            - generic [ref=e535]: <lastmod>
            - text: 2025-05-01
            - generic [ref=e536]: </lastmod>
          - generic [ref=e537]:
            - generic [ref=e538]: <changefreq>
            - text: yearly
            - generic [ref=e539]: </changefreq>
          - generic [ref=e540]:
            - generic [ref=e541]: <priority>
            - text: "0.55"
            - generic [ref=e542]: </priority>
        - generic [ref=e544]: </url>
      - generic [ref=e545]:
        - generic [ref=e548]: <url>
        - generic [ref=e549]:
          - generic [ref=e550]:
            - generic [ref=e551]: <loc>
            - text: https://www.ezdry.in/blog/complete-fabric-care-guide-narnaul
            - generic [ref=e552]: </loc>
          - generic [ref=e553]:
            - generic [ref=e554]: <lastmod>
            - text: 2025-05-03
            - generic [ref=e555]: </lastmod>
          - generic [ref=e556]:
            - generic [ref=e557]: <changefreq>
            - text: yearly
            - generic [ref=e558]: </changefreq>
          - generic [ref=e559]:
            - generic [ref=e560]: <priority>
            - text: "0.55"
            - generic [ref=e561]: </priority>
        - generic [ref=e563]: </url>
      - generic [ref=e564]:
        - generic [ref=e567]: <url>
        - generic [ref=e568]:
          - generic [ref=e569]:
            - generic [ref=e570]: <loc>
            - text: https://www.ezdry.in/blog/stain-removal-complete-guide
            - generic [ref=e571]: </loc>
          - generic [ref=e572]:
            - generic [ref=e573]: <lastmod>
            - text: 2025-05-05
            - generic [ref=e574]: </lastmod>
          - generic [ref=e575]:
            - generic [ref=e576]: <changefreq>
            - text: yearly
            - generic [ref=e577]: </changefreq>
          - generic [ref=e578]:
            - generic [ref=e579]: <priority>
            - text: "0.55"
            - generic [ref=e580]: </priority>
        - generic [ref=e582]: </url>
      - generic [ref=e583]:
        - generic [ref=e586]: <url>
        - generic [ref=e587]:
          - generic [ref=e588]:
            - generic [ref=e589]: <loc>
            - text: https://www.ezdry.in/blog/monsoon-laundry-care-narnaul
            - generic [ref=e590]: </loc>
          - generic [ref=e591]:
            - generic [ref=e592]: <lastmod>
            - text: 2025-05-06
            - generic [ref=e593]: </lastmod>
          - generic [ref=e594]:
            - generic [ref=e595]: <changefreq>
            - text: yearly
            - generic [ref=e596]: </changefreq>
          - generic [ref=e597]:
            - generic [ref=e598]: <priority>
            - text: "0.55"
            - generic [ref=e599]: </priority>
        - generic [ref=e601]: </url>
      - generic [ref=e602]:
        - generic [ref=e605]: <url>
        - generic [ref=e606]:
          - generic [ref=e607]:
            - generic [ref=e608]: <loc>
            - text: https://www.ezdry.in/blog/wedding-garment-care-narnaul
            - generic [ref=e609]: </loc>
          - generic [ref=e610]:
            - generic [ref=e611]: <lastmod>
            - text: 2025-05-07
            - generic [ref=e612]: </lastmod>
          - generic [ref=e613]:
            - generic [ref=e614]: <changefreq>
            - text: yearly
            - generic [ref=e615]: </changefreq>
          - generic [ref=e616]:
            - generic [ref=e617]: <priority>
            - text: "0.55"
            - generic [ref=e618]: </priority>
        - generic [ref=e620]: </url>
      - generic [ref=e621]:
        - generic [ref=e624]: <url>
        - generic [ref=e625]:
          - generic [ref=e626]:
            - generic [ref=e627]: <loc>
            - text: https://www.ezdry.in/blog/shoe-cleaning-complete-guide
            - generic [ref=e628]: </loc>
          - generic [ref=e629]:
            - generic [ref=e630]: <lastmod>
            - text: 2025-05-08
            - generic [ref=e631]: </lastmod>
          - generic [ref=e632]:
            - generic [ref=e633]: <changefreq>
            - text: yearly
            - generic [ref=e634]: </changefreq>
          - generic [ref=e635]:
            - generic [ref=e636]: <priority>
            - text: "0.5"
            - generic [ref=e637]: </priority>
        - generic [ref=e639]: </url>
      - generic [ref=e640]:
        - generic [ref=e643]: <url>
        - generic [ref=e644]:
          - generic [ref=e645]:
            - generic [ref=e646]: <loc>
            - text: https://www.ezdry.in/blog/carpet-cleaning-deep-guide
            - generic [ref=e647]: </loc>
          - generic [ref=e648]:
            - generic [ref=e649]: <lastmod>
            - text: 2025-05-09
            - generic [ref=e650]: </lastmod>
          - generic [ref=e651]:
            - generic [ref=e652]: <changefreq>
            - text: yearly
            - generic [ref=e653]: </changefreq>
          - generic [ref=e654]:
            - generic [ref=e655]: <priority>
            - text: "0.5"
            - generic [ref=e656]: </priority>
        - generic [ref=e658]: </url>
      - generic [ref=e659]:
        - generic [ref=e662]: <url>
        - generic [ref=e663]:
          - generic [ref=e664]:
            - generic [ref=e665]: <loc>
            - text: https://www.ezdry.in/blog/b2b-linen-care-hotels
            - generic [ref=e666]: </loc>
          - generic [ref=e667]:
            - generic [ref=e668]: <lastmod>
            - text: 2025-05-09
            - generic [ref=e669]: </lastmod>
          - generic [ref=e670]:
            - generic [ref=e671]: <changefreq>
            - text: yearly
            - generic [ref=e672]: </changefreq>
          - generic [ref=e673]:
            - generic [ref=e674]: <priority>
            - text: "0.5"
            - generic [ref=e675]: </priority>
        - generic [ref=e677]: </url>
      - generic [ref=e678]:
        - generic [ref=e681]: <url>
        - generic [ref=e682]:
          - generic [ref=e683]:
            - generic [ref=e684]: <loc>
            - text: https://www.ezdry.in/blog/hostel-laundry-management
            - generic [ref=e685]: </loc>
          - generic [ref=e686]:
            - generic [ref=e687]: <lastmod>
            - text: 2025-05-09
            - generic [ref=e688]: </lastmod>
          - generic [ref=e689]:
            - generic [ref=e690]: <changefreq>
            - text: yearly
            - generic [ref=e691]: </changefreq>
          - generic [ref=e692]:
            - generic [ref=e693]: <priority>
            - text: "0.5"
            - generic [ref=e694]: </priority>
        - generic [ref=e696]: </url>
      - generic [ref=e697]: <!-- Key trust/legal -->
      - generic [ref=e698]:
        - generic [ref=e701]: <url>
        - generic [ref=e702]:
          - generic [ref=e703]:
            - generic [ref=e704]: <loc>
            - text: https://www.ezdry.in/contact
            - generic [ref=e705]: </loc>
          - generic [ref=e706]:
            - generic [ref=e707]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e708]: </lastmod>
          - generic [ref=e709]:
            - generic [ref=e710]: <changefreq>
            - text: yearly
            - generic [ref=e711]: </changefreq>
          - generic [ref=e712]:
            - generic [ref=e713]: <priority>
            - text: "0.6"
            - generic [ref=e714]: </priority>
        - generic [ref=e716]: </url>
      - generic [ref=e717]:
        - generic [ref=e720]: <url>
        - generic [ref=e721]:
          - generic [ref=e722]:
            - generic [ref=e723]: <loc>
            - text: https://www.ezdry.in/privacy
            - generic [ref=e724]: </loc>
          - generic [ref=e725]:
            - generic [ref=e726]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e727]: </lastmod>
          - generic [ref=e728]:
            - generic [ref=e729]: <changefreq>
            - text: yearly
            - generic [ref=e730]: </changefreq>
          - generic [ref=e731]:
            - generic [ref=e732]: <priority>
            - text: "0.2"
            - generic [ref=e733]: </priority>
        - generic [ref=e735]: </url>
      - generic [ref=e736]:
        - generic [ref=e739]: <url>
        - generic [ref=e740]:
          - generic [ref=e741]:
            - generic [ref=e742]: <loc>
            - text: https://www.ezdry.in/terms
            - generic [ref=e743]: </loc>
          - generic [ref=e744]:
            - generic [ref=e745]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e746]: </lastmod>
          - generic [ref=e747]:
            - generic [ref=e748]: <changefreq>
            - text: yearly
            - generic [ref=e749]: </changefreq>
          - generic [ref=e750]:
            - generic [ref=e751]: <priority>
            - text: "0.2"
            - generic [ref=e752]: </priority>
        - generic [ref=e754]: </url>
      - generic [ref=e755]:
        - generic [ref=e758]: <url>
        - generic [ref=e759]:
          - generic [ref=e760]:
            - generic [ref=e761]: <loc>
            - text: https://www.ezdry.in/refund
            - generic [ref=e762]: </loc>
          - generic [ref=e763]:
            - generic [ref=e764]: <lastmod>
            - text: 2026-05-09
            - generic [ref=e765]: </lastmod>
          - generic [ref=e766]:
            - generic [ref=e767]: <changefreq>
            - text: yearly
            - generic [ref=e768]: </changefreq>
          - generic [ref=e769]:
            - generic [ref=e770]: <priority>
            - text: "0.2"
            - generic [ref=e771]: </priority>
        - generic [ref=e773]: </url>
    - generic [ref=e775]: </urlset>
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('SEO Validation', () => {
  4  |   test('landing page has correct canonical', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     
  7  |     const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  8  |     expect(canonical).toMatch(/ezdry\.in/);
  9  |     expect(canonical).not.toContain('localhost');
  10 |   });
  11 | 
  12 |   test('locality page has canonical', async ({ page }) => {
  13 |     await page.goto('/adarsh-nagar-laundry');
  14 |     
  15 |     const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  16 |     expect(canonical).toContain('adarsh-nagar-laundry');
  17 |     expect(canonical).toMatch(/ezdry\.in/);
  18 |   });
  19 | 
  20 |   test('OpenGraph tags present', async ({ page }) => {
  21 |     await page.goto('/');
  22 |     
  23 |     const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
  24 |     const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
  25 |     const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
  26 |     
  27 |     expect(ogTitle).toBeTruthy();
  28 |     expect(ogDesc).toBeTruthy();
  29 |     expect(ogImage).toBeTruthy();
  30 |   });
  31 | 
  32 |   test('Twitter card tags present', async ({ page }) => {
  33 |     await page.goto('/');
  34 |     
  35 |     const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
  36 |     expect(twitterCard).toBeTruthy();
  37 |   });
  38 | 
  39 |   test('FAQ schema present on landing', async ({ page }) => {
  40 |     await page.goto('/');
  41 |     
  42 |     // Check for JSON-LD script
  43 |     const scripts = await page.locator('script[type="application/ld+json"]').count();
  44 |     expect(scripts).toBeGreaterThan(0);
  45 |     
  46 |     // Get schema content
  47 |     const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
  48 |     expect(schemaContent).toContain('@context');
  49 |   });
  50 | 
  51 |   test('LocalBusiness schema has correct properties', async ({ page }) => {
  52 |     await page.goto('/');
  53 |     
  54 |     const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
  55 |     
  56 |     expect(schemaContent).toContain('@type');
  57 |     expect(schemaContent).toContain('name');
  58 |     expect(schemaContent).toContain('telephone');
  59 |   });
  60 | 
  61 |   test('blog page has BlogPosting schema', async ({ page }) => {
  62 |     await page.goto('/blog/best-laundry-service-narnaul');
  63 |     
  64 |     const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
  65 |     
  66 |     expect(schemaContent).toContain('@type');
  67 |     expect(schemaContent).toContain('BlogPosting');
  68 |   });
  69 | 
  70 |   test('meta description on all key pages', async ({ page }) => {
  71 |     const pages = ['/', '/services', '/pricing', '/areas-we-serve'];
  72 |     
  73 |     for (const path of pages) {
  74 |       await page.goto(path);
  75 |       const description = await page.locator('meta[name="description"]').getAttribute('content');
  76 |       expect(description).toBeTruthy();
  77 |       expect(description!.length).toBeGreaterThan(50);
  78 |     }
  79 |   });
  80 | 
  81 |   test('robots.txt accessible', async ({ page }) => {
  82 |     await page.goto('/robots.txt');
  83 |     
  84 |     const content = await page.locator('body pre').textContent();
  85 |     expect(content).toContain('User-agent');
  86 |     expect(content).toContain('Sitemap');
  87 |   });
  88 | 
  89 |   test('sitemap.xml accessible', async ({ page }) => {
  90 |     await page.goto('/sitemap.xml');
  91 |     
> 92 |     const content = await page.locator('body pre').textContent();
     |                                                    ^ TimeoutError: locator.textContent: Timeout 10000ms exceeded.
  93 |     expect(content).toContain('urlset');
  94 |     expect(content).toContain('loc');
  95 |   });
  96 | });
  97 | 
```