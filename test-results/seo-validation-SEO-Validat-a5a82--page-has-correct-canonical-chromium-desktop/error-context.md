# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo-validation.spec.ts >> SEO Validation >> landing page has correct canonical
- Location: e2e\seo-validation.spec.ts:4:3

# Error details

```
Error: expect(received).toMatch(expected)

Expected pattern: /ezdry\.in/
Received string:  "http://localhost:5173/"
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
        - generic [ref=e19]:
          - link "Home" [ref=e20] [cursor=pointer]:
            - /url: /
          - link "Services" [ref=e21] [cursor=pointer]:
            - /url: /services
          - link "Commercial" [ref=e22] [cursor=pointer]:
            - /url: /commercial
          - link "How It Works" [ref=e23] [cursor=pointer]:
            - /url: /how-it-works
          - link "Pricing" [ref=e24] [cursor=pointer]:
            - /url: /pricing
          - link "Plans" [ref=e25] [cursor=pointer]:
            - /url: /plans
          - link "Blog" [ref=e26] [cursor=pointer]:
            - /url: /blog
          - link "Contact" [ref=e27] [cursor=pointer]:
            - /url: /contact
        - generic [ref=e28]:
          - link "Login" [ref=e29] [cursor=pointer]:
            - /url: /customer/login
          - button "Book Pickup" [ref=e30]
    - main [ref=e31]:
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]:
            - img [ref=e39]
            - text: "Narnaul's #1 Clothing Spa"
          - heading "Laundry Redefined." [level=1] [ref=e42]:
            - text: Laundry
            - text: Redefined.
          - paragraph [ref=e43]: From silk sarees to everyday wear—we pick up, clean, and deliver. All of Narnaul covered.
          - generic [ref=e46]:
            - img [ref=e47]
            - textbox "Check price (e.g. Silk Saree, Suit, Shirt...)" [ref=e50]
          - generic [ref=e51]:
            - button "Schedule Pickup" [ref=e52]:
              - img
              - text: Schedule Pickup
            - generic [ref=e53]:
              - generic [ref=e54]:
                - generic [ref=e55]:
                  - generic [ref=e56]: A
                  - generic [ref=e57]: B
                  - generic [ref=e58]: C
                  - generic [ref=e59]: D
                - generic [ref=e60]:
                  - img [ref=e61]
                  - generic [ref=e63]: 4.9/5
              - generic [ref=e64]: Trusted by 500+ Families in Narnaul
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e67]:
                - img [ref=e68]
                - generic [ref=e70]: Hygienic
              - paragraph [ref=e71]: Sanitized processing for every garment.
            - generic [ref=e72]:
              - generic [ref=e73]:
                - img [ref=e74]
                - generic [ref=e77]: 24h Return
              - paragraph [ref=e78]: Express delivery available in Narnaul.
            - generic [ref=e79]:
              - generic [ref=e80]:
                - img [ref=e81]
                - generic [ref=e84]: Free Pickup
              - paragraph [ref=e85]: No-cost doorstep collection service.
        - generic [ref=e89]:
          - img "Premium Laundry Service in Narnaul" [ref=e90]
          - generic [ref=e91]:
            - paragraph [ref=e92]: Next Available Slot
            - paragraph [ref=e93]: Today, 2:00 PM
          - generic [ref=e95]:
            - generic [ref=e96]: "4.9"
            - generic [ref=e97]:
              - paragraph [ref=e98]: Top Rated
              - paragraph [ref=e99]: Narnaul's favorite clothing care
      - generic [ref=e101]:
        - paragraph [ref=e102]: Trusted by Narnaul's Residents & Businesses
        - generic [ref=e103]:
          - generic [ref=e104]:
            - img [ref=e105]
            - text: HOTELS
          - generic [ref=e109]:
            - img [ref=e110]
            - text: HOSTELS
          - generic [ref=e113]:
            - img [ref=e114]
            - text: DINING
          - generic [ref=e117]:
            - img [ref=e118]
            - text: SALONS
      - generic [ref=e125]:
        - generic [ref=e126]:
          - heading "Our Professional Services in Narnaul" [level=2] [ref=e127]
          - paragraph [ref=e128]: We offer a complete range of clothing care solutions for your wardrobe. From everyday wash & fold to premium dry cleaning and specialized item cleaning.
        - generic [ref=e129]:
          - generic [ref=e130]:
            - generic [ref=e131]: 🧺
            - heading "Laundry (Wash & Fold)" [level=3] [ref=e132]
            - paragraph [ref=e133]: Perfect for everyday wear. Your clothes are washed, dried, and neatly folded. From ₹25/item.
            - generic [ref=e135]: Standard 24-48hr Delivery
          - generic [ref=e136]:
            - generic [ref=e137]: 👔
            - heading "Premium Dry Cleaning" [level=3] [ref=e138]
            - paragraph [ref=e139]: Expert care for suits, sarees, and delicate fabrics using professional solvents. From ₹80/item.
            - generic [ref=e141]: Gentle Care Guaranteed
          - generic [ref=e142]:
            - generic [ref=e143]: ♨️
            - heading "Steam Ironing" [level=3] [ref=e144]
            - paragraph [ref=e145]: Crisp, wrinkle-free clothes with professional steam press technology. From ₹15/item.
            - generic [ref=e147]: Next-Day Return
          - generic [ref=e148]:
            - generic [ref=e149]: 🛏️
            - heading "Blanket & Bedding" [level=3] [ref=e150]
            - paragraph [ref=e151]: Deep cleaning for bedsheets, heavy blankets, pillows, and curtains. From ₹80/piece.
            - generic [ref=e153]: Hygienic Cleaning
        - button "Explore All Services & Pricing" [ref=e155]
      - generic [ref=e158]:
        - generic [ref=e159]:
          - heading "Doorstep to Doorstep — The EZDRY Way" [level=2] [ref=e160]
          - paragraph [ref=e161]: We've redesigned laundry to be simple, fast, and completely hassle-free.
        - generic [ref=e162]:
          - generic [ref=e163]:
            - generic [ref=e165]: 📱
            - generic [ref=e166]: "1"
            - heading "Book a Pickup" [level=3] [ref=e167]
            - paragraph [ref=e168]: Use our website or app to select your items and schedule a pickup slot in Narnaul.
          - generic [ref=e169]:
            - generic [ref=e171]: 🚴
            - generic [ref=e172]: "2"
            - heading "Doorstep Collection" [level=3] [ref=e173]
            - paragraph [ref=e174]: Our rider arrives at your address at the scheduled time to collect your garments.
          - generic [ref=e175]:
            - generic [ref=e177]: ✨
            - generic [ref=e178]: "3"
            - heading "Professional Processing" [level=3] [ref=e179]
            - paragraph [ref=e180]: Clothes are tagged, sorted, and cleaned using eco-friendly detergents by Narnaul's experts.
          - generic [ref=e181]:
            - generic [ref=e182]: 🎁
            - generic [ref=e183]: "4"
            - heading "Clean Delivery" [level=3] [ref=e184]
            - paragraph [ref=e185]: Your fresh, neatly packed clothes are delivered back to your doorstep within 48 hours.
      - generic [ref=e188]:
        - generic [ref=e189]:
          - heading "Commercial & Bulk Laundry Solutions in Narnaul" [level=2] [ref=e190]
          - paragraph [ref=e191]: Narnaul's businesses deserve premium care too. We provide professional bulk laundry services for local hotels, hostels, and salons with guaranteed turnaround times and commercial-grade cleaning.
          - generic [ref=e192]:
            - generic [ref=e193]:
              - img [ref=e195]
              - heading "Hotels & Guesthouses" [level=3] [ref=e199]
              - paragraph [ref=e200]: Fast and reliable linen cleaning for Narnaul's hospitality sector.
            - generic [ref=e201]:
              - img [ref=e203]
              - heading "Hostels & PG" [level=3] [ref=e206]
              - paragraph [ref=e207]: Bulk laundry solutions for students living in Narnaul.
            - generic [ref=e208]:
              - img [ref=e210]
              - heading "Restaurants" [level=3] [ref=e213]
              - paragraph [ref=e214]: Cleaning for tablecloths, aprons, and staff uniforms.
            - generic [ref=e215]:
              - img [ref=e217]
              - heading "Salons & Spas" [level=3] [ref=e223]
              - paragraph [ref=e224]: Specialized towel and linen cleaning services.
          - button "Inquire for B2B Pricing" [ref=e225]
        - generic [ref=e228]:
          - paragraph [ref=e229]: 50+
          - paragraph [ref=e230]:
            - text: Trusted Business Partners
            - text: in Narnaul
      - generic [ref=e232]:
        - generic [ref=e233]:
          - generic [ref=e234]:
            - img [ref=e235]
            - text: Trust Infrastructure
          - heading "Your Clothes Deserve Forensic Care" [level=2] [ref=e237]
          - paragraph [ref=e238]: "Every step of our process is designed around one principle: treating your garments with the same precision you'd expect from a premium clothing spa."
        - generic [ref=e239]:
          - generic [ref=e241]:
            - img [ref=e243]
            - generic [ref=e248]:
              - paragraph [ref=e249]: Barcode Tagging System
              - heading "Every Garment Gets a Unique ID" [level=3] [ref=e250]
              - paragraph [ref=e251]: Before any processing begins, each item is scanned, tagged with a unique barcode, and photographed. This ensures zero mix-ups and complete traceability throughout the cleaning journey.
              - generic [ref=e252]:
                - img [ref=e253]
                - generic [ref=e256]: 1,00,000+ garments tagged without a single lost item
              - generic [ref=e257]:
                - generic [ref=e258]: 100%
                - generic [ref=e259]: Tracking Accuracy
          - generic [ref=e261]:
            - img [ref=e263]
            - generic [ref=e266]:
              - paragraph [ref=e267]: 5-Stage Water Softening
              - heading "Narnaul's Hard Water Problem Solved" [level=3] [ref=e268]
              - paragraph [ref=e269]: Narnaul's groundwater contains high calcium and magnesium that damages fabrics. We use industrial-grade water softeners to strip out these minerals before water touches your clothes.
              - generic [ref=e270]:
                - img [ref=e271]
                - generic [ref=e274]: Prevents the yellowing and stiffness common in home washing
              - generic [ref=e275]:
                - generic [ref=e276]: 0 PPM
                - generic [ref=e277]: Hardness Level
          - generic [ref=e279]:
            - img [ref=e281]
            - generic [ref=e283]:
              - paragraph [ref=e284]: Precision Temperature Control
              - heading "Heat-Calibrated for Each Fabric" [level=3] [ref=e285]
              - paragraph [ref=e286]: Silk requires cold water. Wool needs lukewarm. Cotton can handle heat. Our machines automatically adjust temperature based on fabric type to prevent shrinkage and color bleeding.
              - generic [ref=e287]:
                - img [ref=e288]
                - generic [ref=e291]: Zero shrinkage complaints in 12 months of operation
              - generic [ref=e292]:
                - generic [ref=e293]: ±2°C
                - generic [ref=e294]: Accuracy
          - generic [ref=e296]:
            - img [ref=e298]
            - generic [ref=e302]:
              - paragraph [ref=e303]: Hygienic Packaging
              - heading "Sealed, Clean, Ready to Wear" [level=3] [ref=e304]
              - paragraph [ref=e305]: After processing, every garment is individually packed in biodegradable covers. Suits and sarees get garment bags. Everything is sealed to maintain freshness until delivery.
              - generic [ref=e306]:
                - img [ref=e307]
                - generic [ref=e310]: ISO-standard packaging materials used
              - generic [ref=e311]:
                - generic [ref=e312]: Sealed
                - generic [ref=e313]: Per Garment
        - generic [ref=e315]:
          - generic [ref=e316]:
            - paragraph [ref=e317]: "12"
            - paragraph [ref=e318]: Active Riders
            - paragraph [ref=e319]: Across Narnaul
          - generic [ref=e320]:
            - paragraph [ref=e321]: 500+
            - paragraph [ref=e322]: Processing Capacity
            - paragraph [ref=e323]: Kg per day
          - generic [ref=e324]:
            - paragraph [ref=e325]: 15km
            - paragraph [ref=e326]: Coverage Area
            - paragraph [ref=e327]: Radius from center
          - generic [ref=e328]:
            - paragraph [ref=e329]: 25+
            - paragraph [ref=e330]: Localities Served
            - paragraph [ref=e331]: All major areas
        - generic [ref=e332]:
          - generic [ref=e333]:
            - heading "Local Trust Signals" [level=3] [ref=e334]:
              - img [ref=e335]
              - text: Local Trust Signals
            - generic [ref=e338]:
              - generic [ref=e339]:
                - img [ref=e341]
                - generic [ref=e344]:
                  - heading "Hyper-Local Operations" [level=4] [ref=e345]
                  - paragraph [ref=e346]: Processing facility located within Narnaul city limits. No outsourcing to other cities.
              - generic [ref=e347]:
                - img [ref=e349]
                - generic [ref=e352]:
                  - heading "15-Min Pickup Window" [level=4] [ref=e353]
                  - paragraph [ref=e354]: Riders arrive within 15 minutes of scheduled time or we notify you immediately.
              - generic [ref=e355]:
                - img [ref=e357]
                - generic [ref=e362]:
                  - heading "Verified Local Riders" [level=4] [ref=e363]
                  - paragraph [ref=e364]: All delivery partners are background-verified Narnaul residents with local knowledge.
              - generic [ref=e365]:
                - img [ref=e367]
                - generic [ref=e370]:
                  - heading "Narnaul Business Network" [level=4] [ref=e371]
                  - paragraph [ref=e372]: Partnered with established local laundry businesses, not anonymous operators.
          - generic [ref=e373]:
            - heading "Safety Guarantees" [level=3] [ref=e374]:
              - img [ref=e375]
              - text: Safety Guarantees
            - generic [ref=e377]:
              - generic [ref=e378]:
                - img [ref=e380]
                - generic [ref=e382]:
                  - heading "Garment Damage Protection" [level=4] [ref=e383]
                  - paragraph [ref=e384]: In the rare event of damage caused by our process, we compensate up to 5x the service cost or provide replacement at fair market value.
              - generic [ref=e385]:
                - img [ref=e387]
                - generic [ref=e390]:
                  - heading "Privacy Guaranteed" [level=4] [ref=e391]
                  - paragraph [ref=e392]: Your address and contact details are visible only to your assigned rider and our internal operations team. No third-party sharing.
              - generic [ref=e393]:
                - img [ref=e395]
                - generic [ref=e399]:
                  - heading "Quality Audit Trail" [level=4] [ref=e400]
                  - paragraph [ref=e401]: "Every order has a complete digital record: pickup photos, processing timestamps, quality check notes, and delivery confirmation."
              - generic [ref=e402]:
                - img [ref=e404]
                - generic [ref=e406]:
                  - heading "Instant Issue Resolution" [level=4] [ref=e407]
                  - paragraph [ref=e408]: Problems are resolved within 24 hours. WhatsApp us and a real human responds, not a bot.
        - generic [ref=e409]:
          - generic [ref=e410]:
            - img [ref=e411]
            - generic [ref=e414]: Zero Lost Garments
          - paragraph [ref=e415]: Since our launch in Narnaul, we have processed over 1,00,000 garments without losing a single item. Our barcode tracking system, verified riders, and local operations make this possible. Your clothes are safer with us than at home.
      - generic [ref=e418]:
        - generic [ref=e419]:
          - heading "What Narnaul Actually Says" [level=3] [ref=e420]
          - paragraph [ref=e421]: Real reviews from real customers. We don't hide the occasional hiccup.
          - generic [ref=e422]:
            - generic [ref=e423]:
              - img [ref=e424]
              - text: 127 Google Reviews
            - generic [ref=e427]:
              - img [ref=e428]
              - text: Photo Verified
            - generic [ref=e431]:
              - img [ref=e432]
              - text: Narnaul Only
            - generic [ref=e435]:
              - img [ref=e436]
              - text: 12 Months Operating
        - generic [ref=e439]:
          - generic [ref=e440]:
            - generic [ref=e441]:
              - generic [ref=e442]:
                - generic [ref=e443]: S
                - generic [ref=e444]:
                  - generic [ref=e445]:
                    - generic [ref=e446]: Suresh Kumar
                    - generic [ref=e447]:
                      - img [ref=e448]
                      - text: Verified
                  - generic [ref=e451]:
                    - img [ref=e452]
                    - text: Adarsh Nagar, Block C
              - generic [ref=e455]:
                - generic [ref=e456]:
                  - img [ref=e457]
                  - img [ref=e459]
                  - img [ref=e461]
                  - img [ref=e463]
                  - img [ref=e465]
                - text: 3 days ago
            - paragraph [ref=e468]: "\"Third time using EZDRY. First two times were perfect. This time one shirt had a small stain they missed but when I WhatsApped them, they fixed it same day. Honest service.\""
            - generic [ref=e469]:
              - img [ref=e470]
              - generic [ref=e474]: Customer shared photo
            - generic [ref=e475]:
              - generic [ref=e476]: "#honest"
              - generic [ref=e477]: "#quick-fix"
            - generic [ref=e478]:
              - generic [ref=e479]:
                - generic [ref=e480]: Wash & Iron
                - generic [ref=e481]: •
                - generic [ref=e482]: 12 items
              - button "Helpful (8)" [ref=e483]:
                - img [ref=e484]
                - text: Helpful (8)
            - generic [ref=e487]:
              - img [ref=e489]
              - generic [ref=e491]:
                - generic [ref=e492]:
                  - generic [ref=e493]: EZDRY Team
                  - generic [ref=e494]: 2 days ago
                - paragraph [ref=e495]: Thanks Suresh ji! We appreciate you letting us fix that. We've noted your shirt type for future reference.
          - generic [ref=e496]:
            - generic [ref=e497]:
              - generic [ref=e498]:
                - generic [ref=e499]: P
                - generic [ref=e500]:
                  - generic [ref=e501]:
                    - generic [ref=e502]: Priya Devi
                    - generic [ref=e503]:
                      - img [ref=e504]
                      - text: Verified
                  - generic [ref=e507]:
                    - img [ref=e508]
                    - text: Near Shastri Park
              - generic [ref=e511]:
                - generic [ref=e512]:
                  - img [ref=e513]
                  - img [ref=e515]
                  - img [ref=e517]
                  - img [ref=e519]
                  - img [ref=e521]
                - text: 1 week ago
            - paragraph [ref=e524]: "\"Good service but pickup was 30 mins late. Clothes came back clean and pressed nicely. The delay was probably because of rain that day. Will use again.\""
            - generic [ref=e525]:
              - generic [ref=e526]: "#minor-delay"
              - generic [ref=e527]: "#quality-good"
            - generic [ref=e528]:
              - generic [ref=e529]:
                - generic [ref=e530]: Family Plan
                - generic [ref=e531]: •
                - generic [ref=e532]: Monthly subscriber
              - button "Helpful (12)" [ref=e533]:
                - img [ref=e534]
                - text: Helpful (12)
          - generic [ref=e536]:
            - generic [ref=e537]:
              - generic [ref=e538]:
                - generic [ref=e539]: A
                - generic [ref=e540]:
                  - generic [ref=e541]:
                    - generic [ref=e542]: Amit Patel
                    - generic [ref=e543]:
                      - img [ref=e544]
                      - text: Verified
                  - generic [ref=e547]:
                    - img [ref=e548]
                    - text: Mahendragarh Road
              - generic [ref=e551]:
                - generic [ref=e552]:
                  - img [ref=e553]
                  - img [ref=e555]
                  - img [ref=e557]
                  - img [ref=e559]
                  - img [ref=e561]
                - text: 2 weeks ago
            - paragraph [ref=e564]: "\"Finally someone who knows how to clean a white shirt properly! My office shirts used to turn yellow with the local dhobi. These guys use some water softening thing. Works.\""
            - generic [ref=e565]:
              - img [ref=e566]
              - generic [ref=e570]: Customer shared photo
            - generic [ref=e571]:
              - generic [ref=e572]: "#white-shirt-expert"
              - generic [ref=e573]: "#professional"
            - generic [ref=e574]:
              - generic [ref=e575]:
                - generic [ref=e576]: Office Wear Monthly
                - generic [ref=e577]: •
                - generic [ref=e578]: 10 shirts/week
              - button "Helpful (23)" [ref=e579]:
                - img [ref=e580]
                - text: Helpful (23)
            - generic [ref=e583]:
              - img [ref=e585]
              - generic [ref=e587]:
                - generic [ref=e588]:
                  - generic [ref=e589]: EZDRY Team
                  - generic [ref=e590]: 1 week ago
                - paragraph [ref=e591]: Yes sir! Our RO-softened water makes all the difference for whites. Thanks for trusting us with your office wardrobe.
          - generic [ref=e592]:
            - generic [ref=e593]:
              - generic [ref=e594]:
                - generic [ref=e595]: R
                - generic [ref=e596]:
                  - generic [ref=e597]:
                    - generic [ref=e598]: Rani Sharma
                    - generic [ref=e599]:
                      - img [ref=e600]
                      - text: Verified
                  - generic [ref=e603]:
                    - img [ref=e604]
                    - text: Housing Board Colony
              - generic [ref=e607]:
                - generic [ref=e608]:
                  - img [ref=e609]
                  - img [ref=e611]
                  - img [ref=e613]
                  - img [ref=e615]
                  - img [ref=e617]
                - text: 5 days ago
            - paragraph [ref=e620]: "\"My mother-in-law was skeptical about 'online' laundry but now she's convinced. Her 40-year-old silk saree came back safe. She made me write this review 😊\""
            - generic [ref=e621]:
              - img [ref=e622]
              - generic [ref=e626]: Customer shared photo
            - generic [ref=e627]:
              - generic [ref=e628]: "#elderly-approved"
              - generic [ref=e629]: "#silk-expert"
            - generic [ref=e630]:
              - generic [ref=e631]:
                - generic [ref=e632]: Dry Cleaning
                - generic [ref=e633]: •
                - generic [ref=e634]: 2 silk sarees
              - button "Helpful (31)" [ref=e635]:
                - img [ref=e636]
                - text: Helpful (31)
            - generic [ref=e639]:
              - img [ref=e641]
              - generic [ref=e643]:
                - generic [ref=e644]:
                  - generic [ref=e645]: EZDRY Team
                  - generic [ref=e646]: 4 days ago
                - paragraph [ref=e647]: Please thank aunty ji for trusting us with such precious items! 40 years of memories deserve careful handling.
          - generic [ref=e648]:
            - generic [ref=e649]:
              - generic [ref=e650]:
                - generic [ref=e651]: M
                - generic [ref=e652]:
                  - generic [ref=e653]:
                    - generic [ref=e654]: Mohit
                    - generic [ref=e655]:
                      - img [ref=e656]
                      - text: Verified
                  - generic [ref=e659]:
                    - img [ref=e660]
                    - text: Kailash Nagar
              - generic [ref=e663]:
                - generic [ref=e664]:
                  - img [ref=e665]
                  - img [ref=e667]
                  - img [ref=e669]
                  - img [ref=e671]
                  - img [ref=e673]
                - text: 4 days ago
            - paragraph [ref=e676]: "\"Student budget so I was worried about cost. But 15% discount helps. Only issue is minimum order is 299 which is hard when you just need 2-3 shirts cleaned. Maybe start a student mini-plan?\""
            - generic [ref=e677]:
              - generic [ref=e678]: "#student"
              - generic [ref=e679]: "#suggestion"
              - generic [ref=e680]: "#price-conscious"
            - generic [ref=e681]:
              - generic [ref=e682]:
                - generic [ref=e683]: Student Discount
                - generic [ref=e684]: •
                - generic [ref=e685]: 3-4 items/week
              - button "Helpful (18)" [ref=e686]:
                - img [ref=e687]
                - text: Helpful (18)
            - generic [ref=e690]:
              - img [ref=e692]
              - generic [ref=e694]:
                - generic [ref=e695]:
                  - generic [ref=e696]: EZDRY Team
                  - generic [ref=e697]: 3 days ago
                - paragraph [ref=e698]: Great suggestion Mohit! We're actually testing a 'Student Mini' plan. We'll WhatsApp you about it.
          - generic [ref=e699]:
            - generic [ref=e700]:
              - generic [ref=e701]:
                - generic [ref=e702]: V
                - generic [ref=e703]:
                  - generic [ref=e704]:
                    - generic [ref=e705]: Vikram Singh
                    - generic [ref=e706]:
                      - img [ref=e707]
                      - text: Verified
                  - generic [ref=e710]:
                    - img [ref=e711]
                    - text: Nasibpur
              - generic [ref=e714]:
                - generic [ref=e715]:
                  - img [ref=e716]
                  - img [ref=e718]
                  - img [ref=e720]
                  - img [ref=e722]
                  - img [ref=e724]
                - text: 1 week ago
            - paragraph [ref=e727]: "\"Wasn't sure if they really come to Nasibpur but they do! Driver knows the area well. Even my farm work clothes get properly cleaned now. No more washing at home.\""
            - generic [ref=e728]:
              - generic [ref=e729]: "#rural"
              - generic [ref=e730]: "#farm-clothes"
              - generic [ref=e731]: "#surprised"
            - generic [ref=e732]:
              - generic [ref=e733]:
                - generic [ref=e734]: Rural Service
                - generic [ref=e735]: •
                - generic [ref=e736]: Mixed household
              - button "Helpful (9)" [ref=e737]:
                - img [ref=e738]
                - text: Helpful (9)
        - generic [ref=e740]:
          - paragraph [ref=e741]: These are unedited reviews from Google and our booking system. We believe in showing the real experience, occasional hiccups and all.
          - button "View All 127 Reviews on Google" [ref=e742]
      - generic [ref=e745]:
        - generic [ref=e746]:
          - generic [ref=e747]:
            - generic [ref=e748]:
              - img [ref=e750]
              - generic [ref=e753]:
                - paragraph [ref=e754]: Google Business Profile
                - heading "EZDRY Narnaul" [level=3] [ref=e755]
            - generic [ref=e757]:
              - generic [ref=e758]: "4.8"
              - generic [ref=e759]:
                - generic [ref=e760]:
                  - img [ref=e761]
                  - img [ref=e763]
                  - img [ref=e765]
                  - img [ref=e767]
                  - img [ref=e769]
                - generic [ref=e771]: 127 reviews
          - generic [ref=e772]:
            - generic [ref=e773]:
              - img [ref=e774]
              - generic [ref=e777]: Narnaul, Mahendragarh, Haryana 123001
            - generic [ref=e778]:
              - img [ref=e779]
              - generic [ref=e782]: Top-rated in Narnaul
        - generic [ref=e783]:
          - generic [ref=e784]:
            - heading "Recent Google Reviews" [level=4] [ref=e785]
            - button "View All" [ref=e786]:
              - img
              - text: View All
          - generic [ref=e787]:
            - generic [ref=e788]:
              - generic [ref=e789]:
                - generic [ref=e790]:
                  - img [ref=e792]
                  - generic [ref=e795]:
                    - paragraph [ref=e796]: Priya Sharma
                    - generic [ref=e797]:
                      - generic [ref=e798]: Adarsh Nagar
                      - generic [ref=e799]: •
                      - generic [ref=e800]: 2 weeks ago
                - generic [ref=e801]:
                  - img [ref=e802]
                  - img [ref=e804]
                  - img [ref=e806]
                  - img [ref=e808]
                  - img [ref=e810]
              - paragraph [ref=e812]: "\"Best laundry service in Narnaul! My silk sarees come back perfect every time. The pickup from Adarsh Nagar is always on time. Highly recommended for families.\""
              - generic [ref=e813]:
                - img [ref=e814]
                - generic [ref=e817]: Verified customer
              - button "Helpful (12)" [ref=e819]:
                - img [ref=e820]
                - generic [ref=e822]: Helpful (12)
            - generic [ref=e823]:
              - generic [ref=e824]:
                - generic [ref=e825]:
                  - img [ref=e827]
                  - generic [ref=e830]:
                    - paragraph [ref=e831]: Rahul Patel
                    - generic [ref=e832]:
                      - generic [ref=e833]: Mahendragarh Road
                      - generic [ref=e834]: •
                      - generic [ref=e835]: 1 month ago
                - generic [ref=e836]:
                  - img [ref=e837]
                  - img [ref=e839]
                  - img [ref=e841]
                  - img [ref=e843]
                  - img [ref=e845]
              - paragraph [ref=e847]: "\"Used their express service for a last minute wedding. Sherwani came back pristine in 8 hours. Worth every rupee. They saved my cousin's wedding day!\""
              - generic [ref=e848]:
                - img [ref=e849]
                - generic [ref=e852]: Verified customer
              - button "Helpful (8)" [ref=e854]:
                - img [ref=e855]
                - generic [ref=e857]: Helpful (8)
            - generic [ref=e858]:
              - generic [ref=e859]:
                - generic [ref=e860]:
                  - img [ref=e862]
                  - generic [ref=e865]:
                    - paragraph [ref=e866]: Anita Devi
                    - generic [ref=e867]:
                      - generic [ref=e868]: Shastri Nagar
                      - generic [ref=e869]: •
                      - generic [ref=e870]: 3 weeks ago
                - generic [ref=e871]:
                  - img [ref=e872]
                  - img [ref=e874]
                  - img [ref=e876]
                  - img [ref=e878]
                  - img [ref=e880]
              - paragraph [ref=e882]: "\"Good service overall. Sometimes delivery is a bit late during festivals but quality is consistent. The water softening really makes a difference for clothes.\""
              - generic [ref=e883]:
                - img [ref=e884]
                - generic [ref=e887]: Verified customer
              - button "Helpful (5)" [ref=e889]:
                - img [ref=e890]
                - generic [ref=e892]: Helpful (5)
          - button "Show All 5 Reviews" [ref=e893]:
            - text: Show All 5 Reviews
            - img [ref=e894]
        - generic [ref=e897]:
          - generic [ref=e898]:
            - paragraph [ref=e899]: Happy with our service?
            - paragraph [ref=e900]: Your review helps other Narnaul residents find us
          - button "Leave a Review" [ref=e901]:
            - img
            - text: Leave a Review
      - generic [ref=e904]:
        - generic [ref=e905]:
          - heading "Serving All of Narnaul" [level=2] [ref=e906]
          - paragraph [ref=e907]: Free pickup and delivery across 8+ localities. From Adarsh Nagar to Koriawas — we're never far from your doorstep.
          - generic [ref=e908]:
            - button "Book Narnaul Pickup" [ref=e910]:
              - img
              - generic [ref=e911]: Book Narnaul Pickup
            - button "See All Areas" [ref=e913]:
              - img
              - generic [ref=e914]: See All Areas
            - button "Confirm Your Area" [ref=e916]:
              - img
              - generic [ref=e917]: Confirm Your Area
        - generic [ref=e918]:
          - generic [ref=e920]:
            - generic [ref=e921]:
              - heading "Find EZDRY in Narnaul" [level=3] [ref=e922]
              - paragraph [ref=e923]: Narnaul, Mahendragarh District, Haryana 123001
            - generic [ref=e925]: Open Now
          - generic [ref=e927]:
            - generic [ref=e928]:
              - paragraph [ref=e934]: 15km Service Radius
              - img [ref=e938]
            - generic [ref=e944]:
              - generic [ref=e945]:
                - img [ref=e947]
                - generic [ref=e950]:
                  - paragraph [ref=e951]: 8:00 AM - 8:00 PM
                  - paragraph [ref=e952]: Daily Service Hours
              - button "View Map" [ref=e953]:
                - img
                - text: View Map
          - generic [ref=e954]:
            - generic [ref=e955]:
              - generic [ref=e956]:
                - img [ref=e958]
                - generic [ref=e961]:
                  - paragraph [ref=e962]: Free Pickup
                  - paragraph [ref=e963]: All over Narnaul
              - generic [ref=e964]:
                - img [ref=e966]
                - generic [ref=e968]:
                  - paragraph [ref=e969]: 15km Radius
                  - paragraph [ref=e970]: Service coverage
              - generic [ref=e971]:
                - img [ref=e973]
                - generic [ref=e975]:
                  - paragraph [ref=e976]: +91 96718 69470
                  - paragraph [ref=e977]: Call for pickup
            - button "Get Directions on Google Maps" [ref=e978]:
              - img
              - text: Get Directions on Google Maps
      - generic [ref=e980]:
        - generic [ref=e981]:
          - generic [ref=e982]:
            - heading "Clothing Care Blog" [level=2] [ref=e983]
            - paragraph [ref=e984]: Expert tips on laundry, stain removal, and fabric care.
          - button "View All Articles" [ref=e985]
        - generic [ref=e986]:
          - article [ref=e987] [cursor=pointer]:
            - img [ref=e989]
            - generic [ref=e991]:
              - paragraph [ref=e992]: 9 May 2025 · EZDRY Home Textile Specialists
              - heading "Deep Carpet & Rug Cleaning Guide for Narnaul Homes" [level=3] [ref=e993]
              - paragraph [ref=e994]: Carpets in Narnaul face dust, hard water, and heavy use. Learn professional-grade cleaning methods for wool carpets, synthetic rugs, and traditional dhurries.
              - generic [ref=e995]:
                - text: Read Article
                - img [ref=e996]
          - article [ref=e998] [cursor=pointer]:
            - img [ref=e1000]
            - generic [ref=e1002]:
              - paragraph [ref=e1003]: 9 May 2025 · EZDRY Commercial Team
              - heading "Commercial Linen Care for Narnaul Hotels & Restaurants" [level=3] [ref=e1004]
              - paragraph [ref=e1005]: Narnaul's hospitality businesses need industrial-grade linen care. Best practices for hotel bedsheets, restaurant tablecloths, and staff uniform maintenance.
              - generic [ref=e1006]:
                - text: Read Article
                - img [ref=e1007]
          - article [ref=e1009] [cursor=pointer]:
            - img [ref=e1011]
            - generic [ref=e1013]:
              - paragraph [ref=e1014]: 9 May 2025 · EZDRY B2B Operations
              - heading "Complete Hostel & PG Laundry Management Guide" [level=3] [ref=e1015]
              - paragraph [ref=e1016]: Running a hostel or PG in Narnaul? Learn how to manage bulk laundry for students efficiently - from collection systems to individual garment tracking.
              - generic [ref=e1017]:
                - text: Read Article
                - img [ref=e1018]
      - generic [ref=e1021]:
        - heading "Laundry & Dry Cleaning FAQs in Narnaul" [level=2] [ref=e1022]
        - generic [ref=e1023]:
          - button "Does EZDRY offer free laundry pickup in Narnaul?" [ref=e1025]:
            - heading "Does EZDRY offer free laundry pickup in Narnaul?" [level=3] [ref=e1026]
            - img [ref=e1028]
          - button "What is the turnaround time for laundry in Narnaul?" [ref=e1030]:
            - heading "What is the turnaround time for laundry in Narnaul?" [level=3] [ref=e1031]
            - img [ref=e1033]
          - button "Is EZDRY safe for premium silk sarees and suits?" [ref=e1035]:
            - heading "Is EZDRY safe for premium silk sarees and suits?" [level=3] [ref=e1036]
            - img [ref=e1038]
          - button "Does EZDRY serve hotels and hostels in Narnaul?" [ref=e1040]:
            - heading "Does EZDRY serve hotels and hostels in Narnaul?" [level=3] [ref=e1041]
            - img [ref=e1043]
          - button "What is the starting price for dry cleaning in Narnaul?" [ref=e1045]:
            - heading "What is the starting price for dry cleaning in Narnaul?" [level=3] [ref=e1046]
            - img [ref=e1048]
      - generic [ref=e1051]:
        - generic [ref=e1052]: 🏪
        - heading "Partner with EZDRY in Narnaul" [level=2] [ref=e1053]
        - paragraph [ref=e1054]: Own a laundry or dry cleaning business in Narnaul? Join our network, digitize your operations, and get more customers without any overhead.
        - generic [ref=e1055]:
          - button "Start Partnering Today" [ref=e1056]
          - button "Partner Login" [ref=e1057]
    - link "Contact on WhatsApp" [ref=e1058] [cursor=pointer]:
      - /url: https://wa.me/919671869470
      - img [ref=e1059]
      - generic: WhatsApp Us
    - generic [ref=e1062]:
      - generic [ref=e1063]:
        - heading "Areas We Serve in Narnaul" [level=2] [ref=e1064]
        - paragraph [ref=e1065]: EZDRY provides premium doorstep laundry and dry cleaning services across all major localities in Narnaul. We pick up and deliver directly to your doorstep.
      - generic [ref=e1066]:
        - link "Adarsh Nagar" [ref=e1067] [cursor=pointer]:
          - /url: /adarsh-nagar-laundry
          - img [ref=e1068]
          - generic [ref=e1071]: Adarsh Nagar
        - link "Mahendragarh Road" [ref=e1072] [cursor=pointer]:
          - /url: /mahendragarh-road-laundry
          - img [ref=e1073]
          - generic [ref=e1076]: Mahendragarh Road
        - link "Koriawas" [ref=e1077] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e1078]
          - generic [ref=e1081]: Koriawas
        - link "Shastri Nagar" [ref=e1082] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e1083]
          - generic [ref=e1086]: Shastri Nagar
        - link "Nasibpur" [ref=e1087] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e1088]
          - generic [ref=e1091]: Nasibpur
        - link "Kailash Nagar" [ref=e1092] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e1093]
          - generic [ref=e1096]: Kailash Nagar
        - link "Old Narnaul" [ref=e1097] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e1098]
          - generic [ref=e1101]: Old Narnaul
        - link "New Colony" [ref=e1102] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e1103]
          - generic [ref=e1106]: New Colony
        - link "Mandi Area" [ref=e1107] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e1108]
          - generic [ref=e1111]: Mandi Area
        - link "Sadar Bazar" [ref=e1112] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e1113]
          - generic [ref=e1116]: Sadar Bazar
        - link "Housing Board" [ref=e1117] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e1118]
          - generic [ref=e1121]: Housing Board
        - link "Haryana Colony" [ref=e1122] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e1123]
          - generic [ref=e1126]: Haryana Colony
      - paragraph [ref=e1128]:
        - text: Don't see your area? We're likely covering it.
        - link "Contact us to verify" [ref=e1129] [cursor=pointer]:
          - /url: /contact
        - text: .
    - contentinfo [ref=e1130]:
      - generic [ref=e1131]:
        - generic [ref=e1132]:
          - generic [ref=e1133]:
            - generic [ref=e1134]:
              - img [ref=e1135]
              - generic [ref=e1144]:
                - text: EzDry
                - paragraph [ref=e1145]: CLOTH SPA
            - paragraph [ref=e1146]: Narnaul's homegrown premium fabric care platform. Modernizing the way our city handles laundry.
            - generic [ref=e1147]:
              - generic [ref=e1148]:
                - img [ref=e1150]
                - generic [ref=e1153]:
                  - paragraph [ref=e1154]: Regional HQ
                  - paragraph [ref=e1155]: Narnaul, Haryana 123001
              - generic [ref=e1156]:
                - img [ref=e1158]
                - generic [ref=e1160]:
                  - paragraph [ref=e1161]: Concierge
                  - paragraph [ref=e1162]: +91 96718 69470
          - generic [ref=e1163]:
            - heading "Services" [level=3] [ref=e1164]
            - list [ref=e1165]:
              - listitem [ref=e1166]:
                - link "Laundry Service Narnaul" [ref=e1167] [cursor=pointer]:
                  - /url: /laundry-service-narnaul
              - listitem [ref=e1168]:
                - link "Dry Cleaning Narnaul" [ref=e1169] [cursor=pointer]:
                  - /url: /dry-cleaning-narnaul
              - listitem [ref=e1170]:
                - link "Laundry Service" [ref=e1171] [cursor=pointer]:
                  - /url: /laundry-service-narnaul
              - listitem [ref=e1172]:
                - link "Dry Cleaning" [ref=e1173] [cursor=pointer]:
                  - /url: /dry-cleaning-narnaul
              - listitem [ref=e1174]:
                - link "Steam Ironing" [ref=e1175] [cursor=pointer]:
                  - /url: /services#ironing
              - listitem [ref=e1176]:
                - link "Commercial Laundry" [ref=e1177] [cursor=pointer]:
                  - /url: /commercial
              - listitem [ref=e1178]:
                - link "Shoe Cleaning" [ref=e1179] [cursor=pointer]:
                  - /url: /shoe-cleaning-narnaul
              - listitem [ref=e1180]:
                - link "Carpet & Curtains" [ref=e1181] [cursor=pointer]:
                  - /url: /services
          - generic [ref=e1182]:
            - heading "Company" [level=3] [ref=e1183]
            - list [ref=e1184]:
              - listitem [ref=e1185]:
                - link "Pricing List" [ref=e1186] [cursor=pointer]:
                  - /url: /pricing
              - listitem [ref=e1187]:
                - link "How It Works" [ref=e1188] [cursor=pointer]:
                  - /url: /how-it-works
              - listitem [ref=e1189]:
                - link "Our Story" [ref=e1190] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e1191]:
                - link "Knowledge Hub" [ref=e1192] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e1193]:
                - link "Support" [ref=e1194] [cursor=pointer]:
                  - /url: /contact
          - generic [ref=e1195]:
            - generic [ref=e1196]:
              - heading "Local Trust" [level=3] [ref=e1197]
              - generic [ref=e1198]:
                - generic [ref=e1199]:
                  - img [ref=e1200]
                  - paragraph [ref=e1202]: 4.9/5 Rating
                - paragraph [ref=e1203]: Trusted by 5,000+ residents across Narnaul for premium garment care.
            - generic [ref=e1204]:
              - link [ref=e1205] [cursor=pointer]:
                - /url: https://www.instagram.com/ezdryco/
                - img [ref=e1206]
              - link [ref=e1209] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/ezdry-co-8b4363405/
                - img [ref=e1210]
              - link [ref=e1214] [cursor=pointer]:
                - /url: https://www.youtube.com/@Dryco-h8i
                - img [ref=e1215]
        - generic [ref=e1218]:
          - paragraph [ref=e1219]: © 2026 EZDRY Narnaul. All Rights Reserved.
          - generic [ref=e1220]:
            - link "Privacy Policy" [ref=e1221] [cursor=pointer]:
              - /url: /privacy
            - link "Terms of Use" [ref=e1222] [cursor=pointer]:
              - /url: /terms
            - link "Refund Policy" [ref=e1223] [cursor=pointer]:
              - /url: /refund
  - region "Notifications (F8)":
    - list
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
> 8  |     expect(canonical).toMatch(/ezdry\.in/);
     |                       ^ Error: expect(received).toMatch(expected)
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
  92 |     const content = await page.locator('body pre').textContent();
  93 |     expect(content).toContain('urlset');
  94 |     expect(content).toContain('loc');
  95 |   });
  96 | });
  97 | 
```