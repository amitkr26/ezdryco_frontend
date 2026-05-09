# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile-ux.spec.ts >> Mobile UX - Pixel 7 >> touch targets adequate size
- Location: e2e\mobile-ux.spec.ts:80:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 30
Received:   20
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - link "EzDry CLOTH SPA" [ref=e6] [cursor=pointer]:
          - /url: /
          - generic [ref=e7]:
            - img [ref=e8]
            - generic [ref=e17]:
              - text: EzDry
              - paragraph [ref=e18]: CLOTH SPA
        - button "Open menu" [ref=e20]:
          - img [ref=e21]
      - generic [ref=e22]:
        - link "Home" [ref=e23] [cursor=pointer]:
          - /url: /
          - text: Home
          - img [ref=e24]
        - link "Services" [ref=e26] [cursor=pointer]:
          - /url: /services
          - text: Services
          - img [ref=e27]
        - link "Commercial" [ref=e29] [cursor=pointer]:
          - /url: /commercial
          - text: Commercial
          - img [ref=e30]
        - link "How It Works" [ref=e32] [cursor=pointer]:
          - /url: /how-it-works
          - text: How It Works
          - img [ref=e33]
        - link "Pricing" [ref=e35] [cursor=pointer]:
          - /url: /pricing
          - text: Pricing
          - img [ref=e36]
        - link "Plans" [ref=e38] [cursor=pointer]:
          - /url: /plans
          - text: Plans
          - img [ref=e39]
        - link "Blog" [ref=e41] [cursor=pointer]:
          - /url: /blog
          - text: Blog
          - img [ref=e42]
        - link "Contact" [ref=e44] [cursor=pointer]:
          - /url: /contact
          - text: Contact
          - img [ref=e45]
        - generic [ref=e47]:
          - button "Book Your Pickup" [ref=e48]
          - button "Login to Account" [ref=e49]
    - main [ref=e50]:
      - generic [ref=e56]:
        - generic [ref=e57]:
          - img [ref=e58]
          - text: "Narnaul's #1 Clothing Spa"
        - heading "Laundry Redefined." [level=1] [ref=e61]:
          - text: Laundry
          - text: Redefined.
        - paragraph [ref=e62]: From silk sarees to everyday wear—we pick up, clean, and deliver. All of Narnaul covered.
        - generic [ref=e65]:
          - img [ref=e66]
          - textbox "Check price (e.g. Silk Saree, Suit, Shirt...)" [ref=e69]
        - generic [ref=e70]:
          - button "Schedule Pickup" [ref=e71]:
            - img
            - text: Schedule Pickup
          - generic [ref=e72]:
            - generic [ref=e73]:
              - generic [ref=e74]:
                - generic [ref=e75]: A
                - generic [ref=e76]: B
                - generic [ref=e77]: C
                - generic [ref=e78]: D
              - generic [ref=e79]:
                - img [ref=e80]
                - generic [ref=e82]: 4.9/5
            - generic [ref=e83]: Trusted by 500+ Families in Narnaul
        - generic [ref=e84]:
          - generic [ref=e85]:
            - generic [ref=e86]:
              - img [ref=e87]
              - generic [ref=e89]: Hygienic
            - paragraph [ref=e90]: Sanitized processing for every garment.
          - generic [ref=e91]:
            - generic [ref=e92]:
              - img [ref=e93]
              - generic [ref=e96]: 24h Return
            - paragraph [ref=e97]: Express delivery available in Narnaul.
          - generic [ref=e98]:
            - generic [ref=e99]:
              - img [ref=e100]
              - generic [ref=e103]: Free Pickup
            - paragraph [ref=e104]: No-cost doorstep collection service.
      - generic [ref=e106]:
        - paragraph [ref=e107]: Trusted by Narnaul's Residents & Businesses
        - generic [ref=e108]:
          - generic [ref=e109]:
            - img [ref=e110]
            - text: HOTELS
          - generic [ref=e114]:
            - img [ref=e115]
            - text: HOSTELS
          - generic [ref=e118]:
            - img [ref=e119]
            - text: DINING
          - generic [ref=e122]:
            - img [ref=e123]
            - text: SALONS
      - generic [ref=e130]:
        - generic [ref=e131]:
          - heading "Our Professional Services in Narnaul" [level=2] [ref=e132]
          - paragraph [ref=e133]: We offer a complete range of clothing care solutions for your wardrobe. From everyday wash & fold to premium dry cleaning and specialized item cleaning.
        - generic [ref=e134]:
          - generic [ref=e135]:
            - generic [ref=e136]: 🧺
            - heading "Laundry (Wash & Fold)" [level=3] [ref=e137]
            - paragraph [ref=e138]: Perfect for everyday wear. Your clothes are washed, dried, and neatly folded. From ₹25/item.
            - generic [ref=e140]: Standard 24-48hr Delivery
          - generic [ref=e141]:
            - generic [ref=e142]: 👔
            - heading "Premium Dry Cleaning" [level=3] [ref=e143]
            - paragraph [ref=e144]: Expert care for suits, sarees, and delicate fabrics using professional solvents. From ₹80/item.
            - generic [ref=e146]: Gentle Care Guaranteed
          - generic [ref=e147]:
            - generic [ref=e148]: ♨️
            - heading "Steam Ironing" [level=3] [ref=e149]
            - paragraph [ref=e150]: Crisp, wrinkle-free clothes with professional steam press technology. From ₹15/item.
            - generic [ref=e152]: Next-Day Return
          - generic [ref=e153]:
            - generic [ref=e154]: 🛏️
            - heading "Blanket & Bedding" [level=3] [ref=e155]
            - paragraph [ref=e156]: Deep cleaning for bedsheets, heavy blankets, pillows, and curtains. From ₹80/piece.
            - generic [ref=e158]: Hygienic Cleaning
        - button "Explore All Services & Pricing" [ref=e160]
      - generic [ref=e163]:
        - generic [ref=e164]:
          - heading "Doorstep to Doorstep — The EZDRY Way" [level=2] [ref=e165]
          - paragraph [ref=e166]: We've redesigned laundry to be simple, fast, and completely hassle-free.
        - generic [ref=e167]:
          - generic [ref=e168]:
            - generic [ref=e169]: 📱
            - generic [ref=e170]: "1"
            - heading "Book a Pickup" [level=3] [ref=e171]
            - paragraph [ref=e172]: Use our website or app to select your items and schedule a pickup slot in Narnaul.
          - generic [ref=e173]:
            - generic [ref=e174]: 🚴
            - generic [ref=e175]: "2"
            - heading "Doorstep Collection" [level=3] [ref=e176]
            - paragraph [ref=e177]: Our rider arrives at your address at the scheduled time to collect your garments.
          - generic [ref=e178]:
            - generic [ref=e179]: ✨
            - generic [ref=e180]: "3"
            - heading "Professional Processing" [level=3] [ref=e181]
            - paragraph [ref=e182]: Clothes are tagged, sorted, and cleaned using eco-friendly detergents by Narnaul's experts.
          - generic [ref=e183]:
            - generic [ref=e184]: 🎁
            - generic [ref=e185]: "4"
            - heading "Clean Delivery" [level=3] [ref=e186]
            - paragraph [ref=e187]: Your fresh, neatly packed clothes are delivered back to your doorstep within 48 hours.
      - generic [ref=e190]:
        - generic [ref=e191]:
          - heading "Commercial & Bulk Laundry Solutions in Narnaul" [level=2] [ref=e192]
          - paragraph [ref=e193]: Narnaul's businesses deserve premium care too. We provide professional bulk laundry services for local hotels, hostels, and salons with guaranteed turnaround times and commercial-grade cleaning.
          - generic [ref=e194]:
            - generic [ref=e195]:
              - img [ref=e197]
              - heading "Hotels & Guesthouses" [level=3] [ref=e201]
              - paragraph [ref=e202]: Fast and reliable linen cleaning for Narnaul's hospitality sector.
            - generic [ref=e203]:
              - img [ref=e205]
              - heading "Hostels & PG" [level=3] [ref=e208]
              - paragraph [ref=e209]: Bulk laundry solutions for students living in Narnaul.
            - generic [ref=e210]:
              - img [ref=e212]
              - heading "Restaurants" [level=3] [ref=e215]
              - paragraph [ref=e216]: Cleaning for tablecloths, aprons, and staff uniforms.
            - generic [ref=e217]:
              - img [ref=e219]
              - heading "Salons & Spas" [level=3] [ref=e225]
              - paragraph [ref=e226]: Specialized towel and linen cleaning services.
          - button "Inquire for B2B Pricing" [ref=e227]
        - generic [ref=e230]:
          - paragraph [ref=e231]: 50+
          - paragraph [ref=e232]:
            - text: Trusted Business Partners
            - text: in Narnaul
      - generic [ref=e234]:
        - generic [ref=e235]:
          - generic [ref=e236]:
            - img [ref=e237]
            - text: Trust Infrastructure
          - heading "Your Clothes Deserve Forensic Care" [level=2] [ref=e239]
          - paragraph [ref=e240]: "Every step of our process is designed around one principle: treating your garments with the same precision you'd expect from a premium clothing spa."
        - generic [ref=e241]:
          - generic [ref=e243]:
            - img [ref=e245]
            - generic [ref=e250]:
              - paragraph [ref=e251]: Barcode Tagging System
              - heading "Every Garment Gets a Unique ID" [level=3] [ref=e252]
              - paragraph [ref=e253]: Before any processing begins, each item is scanned, tagged with a unique barcode, and photographed. This ensures zero mix-ups and complete traceability throughout the cleaning journey.
              - generic [ref=e254]:
                - img [ref=e255]
                - generic [ref=e258]: 1,00,000+ garments tagged without a single lost item
              - generic [ref=e259]:
                - generic [ref=e260]: 100%
                - generic [ref=e261]: Tracking Accuracy
          - generic [ref=e263]:
            - img [ref=e265]
            - generic [ref=e268]:
              - paragraph [ref=e269]: 5-Stage Water Softening
              - heading "Narnaul's Hard Water Problem Solved" [level=3] [ref=e270]
              - paragraph [ref=e271]: Narnaul's groundwater contains high calcium and magnesium that damages fabrics. We use industrial-grade water softeners to strip out these minerals before water touches your clothes.
              - generic [ref=e272]:
                - img [ref=e273]
                - generic [ref=e276]: Prevents the yellowing and stiffness common in home washing
              - generic [ref=e277]:
                - generic [ref=e278]: 0 PPM
                - generic [ref=e279]: Hardness Level
          - generic [ref=e281]:
            - img [ref=e283]
            - generic [ref=e285]:
              - paragraph [ref=e286]: Precision Temperature Control
              - heading "Heat-Calibrated for Each Fabric" [level=3] [ref=e287]
              - paragraph [ref=e288]: Silk requires cold water. Wool needs lukewarm. Cotton can handle heat. Our machines automatically adjust temperature based on fabric type to prevent shrinkage and color bleeding.
              - generic [ref=e289]:
                - img [ref=e290]
                - generic [ref=e293]: Zero shrinkage complaints in 12 months of operation
              - generic [ref=e294]:
                - generic [ref=e295]: ±2°C
                - generic [ref=e296]: Accuracy
          - generic [ref=e298]:
            - img [ref=e300]
            - generic [ref=e304]:
              - paragraph [ref=e305]: Hygienic Packaging
              - heading "Sealed, Clean, Ready to Wear" [level=3] [ref=e306]
              - paragraph [ref=e307]: After processing, every garment is individually packed in biodegradable covers. Suits and sarees get garment bags. Everything is sealed to maintain freshness until delivery.
              - generic [ref=e308]:
                - img [ref=e309]
                - generic [ref=e312]: ISO-standard packaging materials used
              - generic [ref=e313]:
                - generic [ref=e314]: Sealed
                - generic [ref=e315]: Per Garment
        - generic [ref=e317]:
          - generic [ref=e318]:
            - paragraph [ref=e319]: "12"
            - paragraph [ref=e320]: Active Riders
            - paragraph [ref=e321]: Across Narnaul
          - generic [ref=e322]:
            - paragraph [ref=e323]: 500+
            - paragraph [ref=e324]: Processing Capacity
            - paragraph [ref=e325]: Kg per day
          - generic [ref=e326]:
            - paragraph [ref=e327]: 15km
            - paragraph [ref=e328]: Coverage Area
            - paragraph [ref=e329]: Radius from center
          - generic [ref=e330]:
            - paragraph [ref=e331]: 25+
            - paragraph [ref=e332]: Localities Served
            - paragraph [ref=e333]: All major areas
        - generic [ref=e334]:
          - generic [ref=e335]:
            - heading "Local Trust Signals" [level=3] [ref=e336]:
              - img [ref=e337]
              - text: Local Trust Signals
            - generic [ref=e340]:
              - generic [ref=e341]:
                - img [ref=e343]
                - generic [ref=e346]:
                  - heading "Hyper-Local Operations" [level=4] [ref=e347]
                  - paragraph [ref=e348]: Processing facility located within Narnaul city limits. No outsourcing to other cities.
              - generic [ref=e349]:
                - img [ref=e351]
                - generic [ref=e354]:
                  - heading "15-Min Pickup Window" [level=4] [ref=e355]
                  - paragraph [ref=e356]: Riders arrive within 15 minutes of scheduled time or we notify you immediately.
              - generic [ref=e357]:
                - img [ref=e359]
                - generic [ref=e364]:
                  - heading "Verified Local Riders" [level=4] [ref=e365]
                  - paragraph [ref=e366]: All delivery partners are background-verified Narnaul residents with local knowledge.
              - generic [ref=e367]:
                - img [ref=e369]
                - generic [ref=e372]:
                  - heading "Narnaul Business Network" [level=4] [ref=e373]
                  - paragraph [ref=e374]: Partnered with established local laundry businesses, not anonymous operators.
          - generic [ref=e375]:
            - heading "Safety Guarantees" [level=3] [ref=e376]:
              - img [ref=e377]
              - text: Safety Guarantees
            - generic [ref=e379]:
              - generic [ref=e380]:
                - img [ref=e382]
                - generic [ref=e384]:
                  - heading "Garment Damage Protection" [level=4] [ref=e385]
                  - paragraph [ref=e386]: In the rare event of damage caused by our process, we compensate up to 5x the service cost or provide replacement at fair market value.
              - generic [ref=e387]:
                - img [ref=e389]
                - generic [ref=e392]:
                  - heading "Privacy Guaranteed" [level=4] [ref=e393]
                  - paragraph [ref=e394]: Your address and contact details are visible only to your assigned rider and our internal operations team. No third-party sharing.
              - generic [ref=e395]:
                - img [ref=e397]
                - generic [ref=e401]:
                  - heading "Quality Audit Trail" [level=4] [ref=e402]
                  - paragraph [ref=e403]: "Every order has a complete digital record: pickup photos, processing timestamps, quality check notes, and delivery confirmation."
              - generic [ref=e404]:
                - img [ref=e406]
                - generic [ref=e408]:
                  - heading "Instant Issue Resolution" [level=4] [ref=e409]
                  - paragraph [ref=e410]: Problems are resolved within 24 hours. WhatsApp us and a real human responds, not a bot.
        - generic [ref=e411]:
          - generic [ref=e412]:
            - img [ref=e413]
            - generic [ref=e416]: Zero Lost Garments
          - paragraph [ref=e417]: Since our launch in Narnaul, we have processed over 1,00,000 garments without losing a single item. Our barcode tracking system, verified riders, and local operations make this possible. Your clothes are safer with us than at home.
      - generic [ref=e420]:
        - generic [ref=e421]:
          - heading "What Narnaul Actually Says" [level=3] [ref=e422]
          - paragraph [ref=e423]: Real reviews from real customers. We don't hide the occasional hiccup.
          - generic [ref=e424]:
            - generic [ref=e425]:
              - img [ref=e426]
              - text: 127 Google Reviews
            - generic [ref=e429]:
              - img [ref=e430]
              - text: Photo Verified
            - generic [ref=e433]:
              - img [ref=e434]
              - text: Narnaul Only
            - generic [ref=e437]:
              - img [ref=e438]
              - text: 12 Months Operating
        - generic [ref=e441]:
          - generic [ref=e442]:
            - generic [ref=e443]:
              - generic [ref=e444]:
                - generic [ref=e445]: S
                - generic [ref=e446]:
                  - generic [ref=e447]:
                    - generic [ref=e448]: Suresh Kumar
                    - generic [ref=e449]:
                      - img [ref=e450]
                      - text: Verified
                  - generic [ref=e453]:
                    - img [ref=e454]
                    - text: Adarsh Nagar, Block C
              - generic [ref=e457]:
                - generic [ref=e458]:
                  - img [ref=e459]
                  - img [ref=e461]
                  - img [ref=e463]
                  - img [ref=e465]
                  - img [ref=e467]
                - text: 3 days ago
            - paragraph [ref=e470]: "\"Third time using EZDRY. First two times were perfect. This time one shirt had a small stain they missed but when I WhatsApped them, they fixed it same day. Honest service.\""
            - generic [ref=e471]:
              - img [ref=e472]
              - generic [ref=e476]: Customer shared photo
            - generic [ref=e477]:
              - generic [ref=e478]: "#honest"
              - generic [ref=e479]: "#quick-fix"
            - generic [ref=e480]:
              - generic [ref=e481]:
                - generic [ref=e482]: Wash & Iron
                - generic [ref=e483]: •
                - generic [ref=e484]: 12 items
              - button "Helpful (8)" [ref=e485]:
                - img [ref=e486]
                - text: Helpful (8)
            - generic [ref=e489]:
              - img [ref=e491]
              - generic [ref=e493]:
                - generic [ref=e494]:
                  - generic [ref=e495]: EZDRY Team
                  - generic [ref=e496]: 2 days ago
                - paragraph [ref=e497]: Thanks Suresh ji! We appreciate you letting us fix that. We've noted your shirt type for future reference.
          - generic [ref=e498]:
            - generic [ref=e499]:
              - generic [ref=e500]:
                - generic [ref=e501]: P
                - generic [ref=e502]:
                  - generic [ref=e503]:
                    - generic [ref=e504]: Priya Devi
                    - generic [ref=e505]:
                      - img [ref=e506]
                      - text: Verified
                  - generic [ref=e509]:
                    - img [ref=e510]
                    - text: Near Shastri Park
              - generic [ref=e513]:
                - generic [ref=e514]:
                  - img [ref=e515]
                  - img [ref=e517]
                  - img [ref=e519]
                  - img [ref=e521]
                  - img [ref=e523]
                - text: 1 week ago
            - paragraph [ref=e526]: "\"Good service but pickup was 30 mins late. Clothes came back clean and pressed nicely. The delay was probably because of rain that day. Will use again.\""
            - generic [ref=e527]:
              - generic [ref=e528]: "#minor-delay"
              - generic [ref=e529]: "#quality-good"
            - generic [ref=e530]:
              - generic [ref=e531]:
                - generic [ref=e532]: Family Plan
                - generic [ref=e533]: •
                - generic [ref=e534]: Monthly subscriber
              - button "Helpful (12)" [ref=e535]:
                - img [ref=e536]
                - text: Helpful (12)
          - generic [ref=e538]:
            - generic [ref=e539]:
              - generic [ref=e540]:
                - generic [ref=e541]: A
                - generic [ref=e542]:
                  - generic [ref=e543]:
                    - generic [ref=e544]: Amit Patel
                    - generic [ref=e545]:
                      - img [ref=e546]
                      - text: Verified
                  - generic [ref=e549]:
                    - img [ref=e550]
                    - text: Mahendragarh Road
              - generic [ref=e553]:
                - generic [ref=e554]:
                  - img [ref=e555]
                  - img [ref=e557]
                  - img [ref=e559]
                  - img [ref=e561]
                  - img [ref=e563]
                - text: 2 weeks ago
            - paragraph [ref=e566]: "\"Finally someone who knows how to clean a white shirt properly! My office shirts used to turn yellow with the local dhobi. These guys use some water softening thing. Works.\""
            - generic [ref=e567]:
              - img [ref=e568]
              - generic [ref=e572]: Customer shared photo
            - generic [ref=e573]:
              - generic [ref=e574]: "#white-shirt-expert"
              - generic [ref=e575]: "#professional"
            - generic [ref=e576]:
              - generic [ref=e577]:
                - generic [ref=e578]: Office Wear Monthly
                - generic [ref=e579]: •
                - generic [ref=e580]: 10 shirts/week
              - button "Helpful (23)" [ref=e581]:
                - img [ref=e582]
                - text: Helpful (23)
            - generic [ref=e585]:
              - img [ref=e587]
              - generic [ref=e589]:
                - generic [ref=e590]:
                  - generic [ref=e591]: EZDRY Team
                  - generic [ref=e592]: 1 week ago
                - paragraph [ref=e593]: Yes sir! Our RO-softened water makes all the difference for whites. Thanks for trusting us with your office wardrobe.
          - generic [ref=e594]:
            - generic [ref=e595]:
              - generic [ref=e596]:
                - generic [ref=e597]: R
                - generic [ref=e598]:
                  - generic [ref=e599]:
                    - generic [ref=e600]: Rani Sharma
                    - generic [ref=e601]:
                      - img [ref=e602]
                      - text: Verified
                  - generic [ref=e605]:
                    - img [ref=e606]
                    - text: Housing Board Colony
              - generic [ref=e609]:
                - generic [ref=e610]:
                  - img [ref=e611]
                  - img [ref=e613]
                  - img [ref=e615]
                  - img [ref=e617]
                  - img [ref=e619]
                - text: 5 days ago
            - paragraph [ref=e622]: "\"My mother-in-law was skeptical about 'online' laundry but now she's convinced. Her 40-year-old silk saree came back safe. She made me write this review 😊\""
            - generic [ref=e623]:
              - img [ref=e624]
              - generic [ref=e628]: Customer shared photo
            - generic [ref=e629]:
              - generic [ref=e630]: "#elderly-approved"
              - generic [ref=e631]: "#silk-expert"
            - generic [ref=e632]:
              - generic [ref=e633]:
                - generic [ref=e634]: Dry Cleaning
                - generic [ref=e635]: •
                - generic [ref=e636]: 2 silk sarees
              - button "Helpful (31)" [ref=e637]:
                - img [ref=e638]
                - text: Helpful (31)
            - generic [ref=e641]:
              - img [ref=e643]
              - generic [ref=e645]:
                - generic [ref=e646]:
                  - generic [ref=e647]: EZDRY Team
                  - generic [ref=e648]: 4 days ago
                - paragraph [ref=e649]: Please thank aunty ji for trusting us with such precious items! 40 years of memories deserve careful handling.
          - generic [ref=e650]:
            - generic [ref=e651]:
              - generic [ref=e652]:
                - generic [ref=e653]: M
                - generic [ref=e654]:
                  - generic [ref=e655]:
                    - generic [ref=e656]: Mohit
                    - generic [ref=e657]:
                      - img [ref=e658]
                      - text: Verified
                  - generic [ref=e661]:
                    - img [ref=e662]
                    - text: Kailash Nagar
              - generic [ref=e665]:
                - generic [ref=e666]:
                  - img [ref=e667]
                  - img [ref=e669]
                  - img [ref=e671]
                  - img [ref=e673]
                  - img [ref=e675]
                - text: 4 days ago
            - paragraph [ref=e678]: "\"Student budget so I was worried about cost. But 15% discount helps. Only issue is minimum order is 299 which is hard when you just need 2-3 shirts cleaned. Maybe start a student mini-plan?\""
            - generic [ref=e679]:
              - generic [ref=e680]: "#student"
              - generic [ref=e681]: "#suggestion"
              - generic [ref=e682]: "#price-conscious"
            - generic [ref=e683]:
              - generic [ref=e684]:
                - generic [ref=e685]: Student Discount
                - generic [ref=e686]: •
                - generic [ref=e687]: 3-4 items/week
              - button "Helpful (18)" [ref=e688]:
                - img [ref=e689]
                - text: Helpful (18)
            - generic [ref=e692]:
              - img [ref=e694]
              - generic [ref=e696]:
                - generic [ref=e697]:
                  - generic [ref=e698]: EZDRY Team
                  - generic [ref=e699]: 3 days ago
                - paragraph [ref=e700]: Great suggestion Mohit! We're actually testing a 'Student Mini' plan. We'll WhatsApp you about it.
          - generic [ref=e701]:
            - generic [ref=e702]:
              - generic [ref=e703]:
                - generic [ref=e704]: V
                - generic [ref=e705]:
                  - generic [ref=e706]:
                    - generic [ref=e707]: Vikram Singh
                    - generic [ref=e708]:
                      - img [ref=e709]
                      - text: Verified
                  - generic [ref=e712]:
                    - img [ref=e713]
                    - text: Nasibpur
              - generic [ref=e716]:
                - generic [ref=e717]:
                  - img [ref=e718]
                  - img [ref=e720]
                  - img [ref=e722]
                  - img [ref=e724]
                  - img [ref=e726]
                - text: 1 week ago
            - paragraph [ref=e729]: "\"Wasn't sure if they really come to Nasibpur but they do! Driver knows the area well. Even my farm work clothes get properly cleaned now. No more washing at home.\""
            - generic [ref=e730]:
              - generic [ref=e731]: "#rural"
              - generic [ref=e732]: "#farm-clothes"
              - generic [ref=e733]: "#surprised"
            - generic [ref=e734]:
              - generic [ref=e735]:
                - generic [ref=e736]: Rural Service
                - generic [ref=e737]: •
                - generic [ref=e738]: Mixed household
              - button "Helpful (9)" [ref=e739]:
                - img [ref=e740]
                - text: Helpful (9)
        - generic [ref=e742]:
          - paragraph [ref=e743]: These are unedited reviews from Google and our booking system. We believe in showing the real experience, occasional hiccups and all.
          - button "View All 127 Reviews on Google" [ref=e744]
      - generic [ref=e747]:
        - generic [ref=e748]:
          - generic [ref=e749]:
            - generic [ref=e750]:
              - img [ref=e752]
              - generic [ref=e755]:
                - paragraph [ref=e756]: Google Business Profile
                - heading "EZDRY Narnaul" [level=3] [ref=e757]
            - generic [ref=e759]:
              - generic [ref=e760]: "4.8"
              - generic [ref=e761]:
                - generic [ref=e762]:
                  - img [ref=e763]
                  - img [ref=e765]
                  - img [ref=e767]
                  - img [ref=e769]
                  - img [ref=e771]
                - generic [ref=e773]: 127 reviews
          - generic [ref=e774]:
            - generic [ref=e775]:
              - img [ref=e776]
              - generic [ref=e779]: Narnaul, Mahendragarh, Haryana 123001
            - generic [ref=e780]:
              - img [ref=e781]
              - generic [ref=e784]: Top-rated in Narnaul
        - generic [ref=e785]:
          - generic [ref=e786]:
            - heading "Recent Google Reviews" [level=4] [ref=e787]
            - button "View All" [ref=e788]:
              - img
              - text: View All
          - generic [ref=e789]:
            - generic [ref=e790]:
              - generic [ref=e791]:
                - generic [ref=e792]:
                  - img [ref=e794]
                  - generic [ref=e797]:
                    - paragraph [ref=e798]: Priya Sharma
                    - generic [ref=e799]:
                      - generic [ref=e800]: Adarsh Nagar
                      - generic [ref=e801]: •
                      - generic [ref=e802]: 2 weeks ago
                - generic [ref=e803]:
                  - img [ref=e804]
                  - img [ref=e806]
                  - img [ref=e808]
                  - img [ref=e810]
                  - img [ref=e812]
              - paragraph [ref=e814]: "\"Best laundry service in Narnaul! My silk sarees come back perfect every time. The pickup from Adarsh Nagar is always on time. Highly recommended for families.\""
              - generic [ref=e815]:
                - img [ref=e816]
                - generic [ref=e819]: Verified customer
              - button "Helpful (12)" [ref=e821]:
                - img [ref=e822]
                - generic [ref=e824]: Helpful (12)
            - generic [ref=e825]:
              - generic [ref=e826]:
                - generic [ref=e827]:
                  - img [ref=e829]
                  - generic [ref=e832]:
                    - paragraph [ref=e833]: Rahul Patel
                    - generic [ref=e834]:
                      - generic [ref=e835]: Mahendragarh Road
                      - generic [ref=e836]: •
                      - generic [ref=e837]: 1 month ago
                - generic [ref=e838]:
                  - img [ref=e839]
                  - img [ref=e841]
                  - img [ref=e843]
                  - img [ref=e845]
                  - img [ref=e847]
              - paragraph [ref=e849]: "\"Used their express service for a last minute wedding. Sherwani came back pristine in 8 hours. Worth every rupee. They saved my cousin's wedding day!\""
              - generic [ref=e850]:
                - img [ref=e851]
                - generic [ref=e854]: Verified customer
              - button "Helpful (8)" [ref=e856]:
                - img [ref=e857]
                - generic [ref=e859]: Helpful (8)
            - generic [ref=e860]:
              - generic [ref=e861]:
                - generic [ref=e862]:
                  - img [ref=e864]
                  - generic [ref=e867]:
                    - paragraph [ref=e868]: Anita Devi
                    - generic [ref=e869]:
                      - generic [ref=e870]: Shastri Nagar
                      - generic [ref=e871]: •
                      - generic [ref=e872]: 3 weeks ago
                - generic [ref=e873]:
                  - img [ref=e874]
                  - img [ref=e876]
                  - img [ref=e878]
                  - img [ref=e880]
                  - img [ref=e882]
              - paragraph [ref=e884]: "\"Good service overall. Sometimes delivery is a bit late during festivals but quality is consistent. The water softening really makes a difference for clothes.\""
              - generic [ref=e885]:
                - img [ref=e886]
                - generic [ref=e889]: Verified customer
              - button "Helpful (5)" [ref=e891]:
                - img [ref=e892]
                - generic [ref=e894]: Helpful (5)
          - button "Show All 5 Reviews" [ref=e895]:
            - text: Show All 5 Reviews
            - img [ref=e896]
        - generic [ref=e899]:
          - generic [ref=e900]:
            - paragraph [ref=e901]: Happy with our service?
            - paragraph [ref=e902]: Your review helps other Narnaul residents find us
          - button "Leave a Review" [ref=e903]:
            - img
            - text: Leave a Review
      - generic [ref=e906]:
        - generic [ref=e907]:
          - heading "Serving All of Narnaul" [level=2] [ref=e908]
          - paragraph [ref=e909]: Free pickup and delivery across 8+ localities. From Adarsh Nagar to Koriawas — we're never far from your doorstep.
          - generic [ref=e910]:
            - button "Book Narnaul Pickup" [ref=e912]:
              - img
              - generic [ref=e913]: Book Narnaul Pickup
            - button "See All Areas" [ref=e915]:
              - img
              - generic [ref=e916]: See All Areas
            - button "Confirm Your Area" [ref=e918]:
              - img
              - generic [ref=e919]: Confirm Your Area
        - generic [ref=e920]:
          - generic [ref=e922]:
            - generic [ref=e923]:
              - heading "Find EZDRY in Narnaul" [level=3] [ref=e924]
              - paragraph [ref=e925]: Narnaul, Mahendragarh District, Haryana 123001
            - generic [ref=e927]: Open Now
          - generic [ref=e929]:
            - generic [ref=e930]:
              - paragraph [ref=e936]: 15km Service Radius
              - img [ref=e940]
            - generic [ref=e946]:
              - generic [ref=e947]:
                - img [ref=e949]
                - generic [ref=e952]:
                  - paragraph [ref=e953]: 8:00 AM - 8:00 PM
                  - paragraph [ref=e954]: Daily Service Hours
              - button "View Map" [ref=e955]:
                - img
                - text: View Map
          - generic [ref=e956]:
            - generic [ref=e957]:
              - generic [ref=e958]:
                - img [ref=e960]
                - generic [ref=e963]:
                  - paragraph [ref=e964]: Free Pickup
                  - paragraph [ref=e965]: All over Narnaul
              - generic [ref=e966]:
                - img [ref=e968]
                - generic [ref=e970]:
                  - paragraph [ref=e971]: 15km Radius
                  - paragraph [ref=e972]: Service coverage
              - generic [ref=e973]:
                - img [ref=e975]
                - generic [ref=e977]:
                  - paragraph [ref=e978]: +91 96718 69470
                  - paragraph [ref=e979]: Call for pickup
            - button "Get Directions on Google Maps" [ref=e980]:
              - img
              - text: Get Directions on Google Maps
      - generic [ref=e982]:
        - generic [ref=e983]:
          - generic [ref=e984]:
            - heading "Clothing Care Blog" [level=2] [ref=e985]
            - paragraph [ref=e986]: Expert tips on laundry, stain removal, and fabric care.
          - button "View All Articles" [ref=e987]
        - generic [ref=e988]:
          - article [ref=e989] [cursor=pointer]:
            - img [ref=e991]
            - generic [ref=e993]:
              - paragraph [ref=e994]: 9 May 2025 · EZDRY Home Textile Specialists
              - heading "Deep Carpet & Rug Cleaning Guide for Narnaul Homes" [level=3] [ref=e995]
              - paragraph [ref=e996]: Carpets in Narnaul face dust, hard water, and heavy use. Learn professional-grade cleaning methods for wool carpets, synthetic rugs, and traditional dhurries.
              - generic [ref=e997]:
                - text: Read Article
                - img [ref=e998]
          - article [ref=e1000] [cursor=pointer]:
            - img [ref=e1002]
            - generic [ref=e1004]:
              - paragraph [ref=e1005]: 9 May 2025 · EZDRY Commercial Team
              - heading "Commercial Linen Care for Narnaul Hotels & Restaurants" [level=3] [ref=e1006]
              - paragraph [ref=e1007]: Narnaul's hospitality businesses need industrial-grade linen care. Best practices for hotel bedsheets, restaurant tablecloths, and staff uniform maintenance.
              - generic [ref=e1008]:
                - text: Read Article
                - img [ref=e1009]
          - article [ref=e1011] [cursor=pointer]:
            - img [ref=e1013]
            - generic [ref=e1015]:
              - paragraph [ref=e1016]: 9 May 2025 · EZDRY B2B Operations
              - heading "Complete Hostel & PG Laundry Management Guide" [level=3] [ref=e1017]
              - paragraph [ref=e1018]: Running a hostel or PG in Narnaul? Learn how to manage bulk laundry for students efficiently - from collection systems to individual garment tracking.
              - generic [ref=e1019]:
                - text: Read Article
                - img [ref=e1020]
      - generic [ref=e1023]:
        - heading "Laundry & Dry Cleaning FAQs in Narnaul" [level=2] [ref=e1024]
        - generic [ref=e1025]:
          - button "Does EZDRY offer free laundry pickup in Narnaul?" [ref=e1027]:
            - heading "Does EZDRY offer free laundry pickup in Narnaul?" [level=3] [ref=e1028]
            - img [ref=e1030]
          - button "What is the turnaround time for laundry in Narnaul?" [ref=e1032]:
            - heading "What is the turnaround time for laundry in Narnaul?" [level=3] [ref=e1033]
            - img [ref=e1035]
          - button "Is EZDRY safe for premium silk sarees and suits?" [ref=e1037]:
            - heading "Is EZDRY safe for premium silk sarees and suits?" [level=3] [ref=e1038]
            - img [ref=e1040]
          - button "Does EZDRY serve hotels and hostels in Narnaul?" [ref=e1042]:
            - heading "Does EZDRY serve hotels and hostels in Narnaul?" [level=3] [ref=e1043]
            - img [ref=e1045]
          - button "What is the starting price for dry cleaning in Narnaul?" [ref=e1047]:
            - heading "What is the starting price for dry cleaning in Narnaul?" [level=3] [ref=e1048]
            - img [ref=e1050]
      - generic [ref=e1053]:
        - generic [ref=e1054]: 🏪
        - heading "Partner with EZDRY in Narnaul" [level=2] [ref=e1055]
        - paragraph [ref=e1056]: Own a laundry or dry cleaning business in Narnaul? Join our network, digitize your operations, and get more customers without any overhead.
        - generic [ref=e1057]:
          - button "Start Partnering Today" [ref=e1058]
          - button "Partner Login" [ref=e1059]
    - link "Contact on WhatsApp" [ref=e1060] [cursor=pointer]:
      - /url: https://wa.me/919671869470
      - img [ref=e1061]
      - generic: WhatsApp Us
    - generic [ref=e1063]:
      - link "Call Now" [ref=e1064] [cursor=pointer]:
        - /url: tel:+919671869470
        - img [ref=e1065]
        - text: Call Now
      - button "Book Pickup Now" [ref=e1067]
    - generic [ref=e1069]:
      - generic [ref=e1070]:
        - heading "Areas We Serve in Narnaul" [level=2] [ref=e1071]
        - paragraph [ref=e1072]: EZDRY provides premium doorstep laundry and dry cleaning services across all major localities in Narnaul. We pick up and deliver directly to your doorstep.
      - generic [ref=e1073]:
        - link "Adarsh Nagar" [ref=e1074] [cursor=pointer]:
          - /url: /adarsh-nagar-laundry
          - img [ref=e1075]
          - generic [ref=e1078]: Adarsh Nagar
        - link "Mahendragarh Road" [ref=e1079] [cursor=pointer]:
          - /url: /mahendragarh-road-laundry
          - img [ref=e1080]
          - generic [ref=e1083]: Mahendragarh Road
        - link "Koriawas" [ref=e1084] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e1085]
          - generic [ref=e1088]: Koriawas
        - link "Shastri Nagar" [ref=e1089] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e1090]
          - generic [ref=e1093]: Shastri Nagar
        - link "Nasibpur" [ref=e1094] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e1095]
          - generic [ref=e1098]: Nasibpur
        - link "Kailash Nagar" [ref=e1099] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e1100]
          - generic [ref=e1103]: Kailash Nagar
        - link "Old Narnaul" [ref=e1104] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e1105]
          - generic [ref=e1108]: Old Narnaul
        - link "New Colony" [ref=e1109] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e1110]
          - generic [ref=e1113]: New Colony
        - link "Mandi Area" [ref=e1114] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e1115]
          - generic [ref=e1118]: Mandi Area
        - link "Sadar Bazar" [ref=e1119] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e1120]
          - generic [ref=e1123]: Sadar Bazar
        - link "Housing Board" [ref=e1124] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e1125]
          - generic [ref=e1128]: Housing Board
        - link "Haryana Colony" [ref=e1129] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e1130]
          - generic [ref=e1133]: Haryana Colony
      - paragraph [ref=e1135]:
        - text: Don't see your area? We're likely covering it.
        - link "Contact us to verify" [ref=e1136] [cursor=pointer]:
          - /url: /contact
        - text: .
    - contentinfo [ref=e1137]:
      - generic [ref=e1138]:
        - generic [ref=e1139]:
          - generic [ref=e1140]:
            - generic [ref=e1141]:
              - img [ref=e1142]
              - generic [ref=e1151]:
                - text: EzDry
                - paragraph [ref=e1152]: CLOTH SPA
            - paragraph [ref=e1153]: Narnaul's homegrown premium fabric care platform. Modernizing the way our city handles laundry.
            - generic [ref=e1154]:
              - generic [ref=e1155]:
                - img [ref=e1157]
                - generic [ref=e1160]:
                  - paragraph [ref=e1161]: Regional HQ
                  - paragraph [ref=e1162]: Narnaul, Haryana 123001
              - generic [ref=e1163]:
                - img [ref=e1165]
                - generic [ref=e1167]:
                  - paragraph [ref=e1168]: Concierge
                  - paragraph [ref=e1169]: +91 96718 69470
          - generic [ref=e1170]:
            - heading "Services" [level=3] [ref=e1171]
            - list [ref=e1172]:
              - listitem [ref=e1173]:
                - link "Laundry Service Narnaul" [ref=e1174] [cursor=pointer]:
                  - /url: /laundry-service-narnaul
              - listitem [ref=e1175]:
                - link "Dry Cleaning Narnaul" [ref=e1176] [cursor=pointer]:
                  - /url: /dry-cleaning-narnaul
              - listitem [ref=e1177]:
                - link "Laundry Service" [ref=e1178] [cursor=pointer]:
                  - /url: /laundry-service-narnaul
              - listitem [ref=e1179]:
                - link "Dry Cleaning" [ref=e1180] [cursor=pointer]:
                  - /url: /dry-cleaning-narnaul
              - listitem [ref=e1181]:
                - link "Steam Ironing" [ref=e1182] [cursor=pointer]:
                  - /url: /services#ironing
              - listitem [ref=e1183]:
                - link "Commercial Laundry" [ref=e1184] [cursor=pointer]:
                  - /url: /commercial
              - listitem [ref=e1185]:
                - link "Shoe Cleaning" [ref=e1186] [cursor=pointer]:
                  - /url: /shoe-cleaning-narnaul
              - listitem [ref=e1187]:
                - link "Carpet & Curtains" [ref=e1188] [cursor=pointer]:
                  - /url: /services
          - generic [ref=e1189]:
            - heading "Company" [level=3] [ref=e1190]
            - list [ref=e1191]:
              - listitem [ref=e1192]:
                - link "Pricing List" [ref=e1193] [cursor=pointer]:
                  - /url: /pricing
              - listitem [ref=e1194]:
                - link "How It Works" [ref=e1195] [cursor=pointer]:
                  - /url: /how-it-works
              - listitem [ref=e1196]:
                - link "Our Story" [ref=e1197] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e1198]:
                - link "Knowledge Hub" [ref=e1199] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e1200]:
                - link "Support" [ref=e1201] [cursor=pointer]:
                  - /url: /contact
          - generic [ref=e1202]:
            - generic [ref=e1203]:
              - heading "Local Trust" [level=3] [ref=e1204]
              - generic [ref=e1205]:
                - generic [ref=e1206]:
                  - img [ref=e1207]
                  - paragraph [ref=e1209]: 4.9/5 Rating
                - paragraph [ref=e1210]: Trusted by 5,000+ residents across Narnaul for premium garment care.
            - generic [ref=e1211]:
              - link [ref=e1212] [cursor=pointer]:
                - /url: https://www.instagram.com/ezdryco/
                - img [ref=e1213]
              - link [ref=e1216] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/ezdry-co-8b4363405/
                - img [ref=e1217]
              - link [ref=e1221] [cursor=pointer]:
                - /url: https://www.youtube.com/@Dryco-h8i
                - img [ref=e1222]
        - generic [ref=e1225]:
          - paragraph [ref=e1226]: © 2026 EZDRY Narnaul. All Rights Reserved.
          - generic [ref=e1227]:
            - link "Privacy Policy" [ref=e1228] [cursor=pointer]:
              - /url: /privacy
            - link "Terms of Use" [ref=e1229] [cursor=pointer]:
              - /url: /terms
            - link "Refund Policy" [ref=e1230] [cursor=pointer]:
              - /url: /refund
  - region "Notifications (F8)":
    - list
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Mobile UX - Pixel 7', () => {
  4   |   test.use({
  5   |     viewport: { width: 412, height: 915 },
  6   |     userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 7)',
  7   |   });
  8   | 
  9   |   test('landing page responsive layout', async ({ page }) => {
  10  |     await page.goto('/');
  11  |     
  12  |     // Check viewport meta
  13  |     const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
  14  |     expect(viewport).toContain('width=device-width');
  15  |     
  16  |     // Check mobile menu or hamburger
  17  |     const menuButton = page.locator('button[aria-label*="menu"], button:has(.lucide-menu)').first();
  18  |     await expect(menuButton).toBeVisible({ timeout: 3000 });
  19  |   });
  20  | 
  21  |   test('sticky CTA visible on mobile', async ({ page }) => {
  22  |     await page.goto('/');
  23  |     
  24  |     // Scroll down
  25  |     await page.evaluate(() => window.scrollTo(0, 500));
  26  |     
  27  |     // Check for sticky elements
  28  |     const stickyElements = page.locator('.fixed, [class*="sticky"]').first();
  29  |     await expect(stickyElements).toBeVisible();
  30  |   });
  31  | 
  32  |   test('mobile booking form usable', async ({ page }) => {
  33  |     await page.goto('/customer/register');
  34  |     
  35  |     // Check form inputs are tappable
  36  |     const inputs = page.locator('input');
  37  |     const count = await inputs.count();
  38  |     expect(count).toBeGreaterThan(0);
  39  |     
  40  |     // Check submit button
  41  |     const submitButton = page.locator('button[type="submit"]').first();
  42  |     const box = await submitButton.boundingBox();
  43  |     expect(box?.height).toBeGreaterThan(40); // Minimum touch target
  44  |     expect(box?.width).toBeGreaterThan(40);
  45  |   });
  46  | 
  47  |   test('no horizontal scroll', async ({ page }) => {
  48  |     await page.goto('/');
  49  |     
  50  |     // Check body width
  51  |     const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  52  |     const viewportWidth = await page.evaluate(() => window.innerWidth);
  53  |     
  54  |     expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // Allow small tolerance
  55  |   });
  56  | 
  57  |   test('floating WhatsApp button visible', async ({ page }) => {
  58  |     await page.goto('/');
  59  |     
  60  |     // Look for WhatsApp button
  61  |     const whatsappButton = page.locator('a[href*="wa.me"], button:has(.lucide-message-circle)').first();
  62  |     await expect(whatsappButton).toBeVisible({ timeout: 3000 });
  63  |   });
  64  | 
  65  |   test('locality cards scrollable', async ({ page }) => {
  66  |     await page.goto('/areas-we-serve');
  67  |     
  68  |     // Check for scrollable content
  69  |     const cards = page.locator('[class*="card"], a[href*="laundry"]').first();
  70  |     await expect(cards).toBeVisible({ timeout: 5000 });
  71  |     
  72  |     // Scroll test
  73  |     await page.evaluate(() => window.scrollTo(0, 1000));
  74  |     await page.waitForTimeout(500);
  75  |     
  76  |     const scrollPosition = await page.evaluate(() => window.scrollY);
  77  |     expect(scrollPosition).toBeGreaterThan(0);
  78  |   });
  79  | 
  80  |   test('touch targets adequate size', async ({ page }) => {
  81  |     await page.goto('/');
  82  |     
  83  |     // Check all buttons
  84  |     const buttons = page.locator('button');
  85  |     const count = await buttons.count();
  86  |     
  87  |     for (let i = 0; i < Math.min(count, 10); i++) {
  88  |       const button = buttons.nth(i);
  89  |       const box = await button.boundingBox();
  90  |       if (box) {
  91  |         expect(box.width).toBeGreaterThan(30);
> 92  |         expect(box.height).toBeGreaterThan(30);
      |                            ^ Error: expect(received).toBeGreaterThan(expected)
  93  |       }
  94  |     }
  95  |   });
  96  | });
  97  | 
  98  | test.describe('Mobile - Slow Network', () => {
  99  |   test.use({
  100 |     viewport: { width: 412, height: 915 },
  101 |   });
  102 | 
  103 |   test('page loads on slow 3G', async ({ page }) => {
  104 |     // Emulate slow network
  105 |     await page.context().setOffline(false);
  106 |     
  107 |     const startTime = Date.now();
  108 |     await page.goto('/');
  109 |     const loadTime = Date.now() - startTime;
  110 |     
  111 |     // Should load within reasonable time
  112 |     expect(loadTime).toBeLessThan(30000);
  113 |     
  114 |     // Check content is visible
  115 |     await expect(page.locator('body')).toBeVisible();
  116 |   });
  117 | });
  118 | 
```