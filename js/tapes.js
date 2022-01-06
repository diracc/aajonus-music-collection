const tapes = [
    [ "Fleedwood Mac", "Rumours", "41:15", "1977", "rumours.png", {
        id: "uzEt9cATWFw",
        list: [
            [ 0, "Second Hand News" ],
            [ 176, "Dreams" ],
            [ 434, "Never Going Back Again" ],
            [ 568, "Don't Stop" ],
            [ 761, "Go Your Own Way" ],
            [ 986, "Songbird" ],
            [ 1186, "Silver Springs" ],
            [ 1478, "The Chain" ],
            [ 1746, "I Don't Want to Know" ],
            [ 1944, "Oh Daddy" ],
            [ 2182, "Gold Dust Woman" ]
        ]
    } ],
    [ "Ron Steward", "Unplugged... and seated", "1:10:02", "1993", "unplugged-and-seated.jpg", {
        id: "UbepM7_P1LE",
        list: [
            [ 0, "Hot Legs" ],
            [ 238, "Tonight's the Night (Gonna Be Alright)" ],
            [ 513, "Handbangs and Gladrags" ],
            [ 776, "Cut Across Shorty" ],
            [ 1076, "Every Picture Tells a Story" ],
            [ 1364, "Maggie May" ],
            [ 1704, "Reason to Believe" ],
            [ 1970, "People Get Ready" ],
            [ 2252, "Have I Told You Lately" ],
            [ 2500, "Tom Traubert's Blues (Waltzing Matilda)" ],
            [ 2780, "The First Cut is Deepest" ],
            [ 3028, "Mandolin Wind" ],
            [ 3355, "Highgate Shuffle" ],
            [ 3590, "Stay With Me" ],
            [ 3917, "Having a Party" ]
            // [ 0, "Gasoline Alley" ],
            // [ 0, "Forever Young" ]
        ]
    } ],
    [ "Geri Allen, Charlie Haden, Paul Motian", "In The Year Of The Dragon", "48:03", "1989", "in-the-year-of-the-dragon.jpg", {
        id: "VUqiUGdkD_8",
        list: [
            [ 0, "Oblivion" ],
            [ 208, "For John Malachi " ],
            [ 425, "Rollano" ],
            [ 682, "See You At Per Tutti's" ],
            [ 1042, "Last Call " ],
            [ 1356, "No More Mr. Nice Guy" ],
            [ 1779, "Invisible" ],
            [ 2060, "First Song" ],
            [ 2406, "In The Year Of The Dragon" ]
        ]
    } ],
    [ "Mary Black", "No Frontiers", "40:50", "2009", "no-frontiers.jpg", {
        list: [
            [ "m3OzwKJMNdk", "No Frontiers" ],
            [ "7GbiWVpwmss", "Past the Point of Rescue" ],
            [ "s3QIWGmxNBI", "The Shadow" ],
            [ "iiyxM93mj7U", "Carolina Rua" ],
            [ "1ySFVOWS5qU", "Shuffle of the Buckled" ],
            [ "2EGfidrunUc", "Columbus" ],
            [ "rR4DSOm_Xt8", "Another Day" ],
            [ "dllnfW_ad5I", "Fat Valley of Pain" ],
            [ "4I8FYped6JY", "I Say a Little Prayer" ],
            [ "JrbNn5_et1c", "Vanaities" ],
            [ "5JlhfVS6hK0", "The Fog in Moterey" ],
        ]
    } ],
    [ "Kate Bush", "The Sensual World", "46:02", "1989", "the-sensual-world.png", {
        list: [
            [ "eLCkTCfAxWE", "The Sensual World" ],
            [ "eQOdZNEP23k", "Love And Anger" ],
            [ "D36vJJ3ZoWY", "The Fog" ],
            [ "h-wnKKe5OVI", "Reaching Out" ],
            [ "mtByv2BJByo", "Heads We're Dancing" ],
            [ "ixs5u5rH4eQ", "Deeper Understanding" ],
            [ "kKxYVVQjMUc", "Between A Man And A Woman" ],
            [ "jGAkY9359ls", "Never Be Mine" ],
            [ "7qC80RbNFwo", "Rocket's Tail" ],
            [ "8iSTMczEuZ4", "This Woman's Work" ],
            [ "qDzc9GkaPtU", "Walk Straight Down The Middle" ],
        ]
    } ],
    [ "Mannheim Steamroller", "Fresh Aire V", "34:38", "1983", "fresh-aire-v.jpg", {
        id: "U7bxJj-9XbA",
        list: [
            [ 0, "Lumen" ],
            [ 89, "Escape from the Atmosphere" ],
            [ 727, "Dancin' in the Stars" ],
            [ 1040, "Z-Row Gravity" ],
            [ 1270, "Creatures of Levania" ],
            [ 1501, "Earthrise/Return" ],
            [ 2039, "The Storm" ]
        ]
    } ],
    [ "Mariah Carey", "Music Box", "41:37", "1993", "music-box.png", {
        id: "VaK5PWvunbY",
        list: [
            [ 0, "Dreamlover" ],
            [ 233, "Hero"],
            [ 490, "Anytime You Need a Friend" ],
            [ 746, "Music Box" ],
            [ 1042, "Now That I Know" ],
            [ 1300, "Never Forget You" ],
            [ 1525, "Without You" ],
            [ 1739, "Just to Hold You Once Again" ],
            [ 1978, "I've Been Thinking About You" ],
            [ 2265, "All I Ever Wanted" ],
        ]
    } ],
    [ "George Michael", "Listen Without Prejudice Vol. 1", "48:34", "1990", "listen-without-prejudice-vol-1.jpg", {
        list: [
            [ "goroyZbVdlo", "Praying for Time" ],
            [ "diYAc7gB-0A", "Freedom! '90" ],
            [ "oata-ksmxjg", "They Won't Go When I Go" ],
            [ "lC3yF-e8KKo", "Something to Save" ],
            [ "Ve-rxwKuqtI", "Cowboys and Angels" ],
            [ "4bH4EhBN180", "Waiting for That Day" ],
            [ "yksM7Ym2yTU", "Mothers Pride" ],
            [ "GwGlhJV75Vc", "Heal the Pain" ],
            [ "PrUWE4-eB48", "Soul Free" ],
            [ "ijzKZXjVV28", "Waiting (Reprise)" ],
        ]
    } ],
    [ "Michael Jackson", "Thriller", "42:16", "1982", "thriller.png", {
        list: [
            [ "1XMvPTFzgVU", "Wanna Be Startin' Somethin'" ],
            [ "O3tnOVideSo", "Baby Be Mine" ],
            [ "8GB9BULxZ8c", "The Girl Is Mine (ft. Paul McCartney)" ],
            [ "sOnqjkJTMaA", "Thriller" ],
            [ "oRdxUFDoQe0", "Beat It" ],
            [ "Zi_XLOBDo_Y", "Billie Jean" ],
            [ "ElN_4vUvTPs", "Human Nature" ],
            [ "1ZZQuj6htF4", "P.Y.T. (Pretty Young Thing)" ],
            [ "cJLH5yXoqi8", "The Lady in My Life" ]
            
        ]
    } ],
    [ "John Lennon, Yoko Ono", "Double Fantasy", "45:01", "1980", "double-fantasy.jpg", {
        list: [
            [ "pZCxyOcvp5A", "(Just Like) Starting Over" ],
            [ "rm_IV6eRqyk", "Kiss Kiss Kiss" ],
            [ "PhMvdUCZLkg", "Cleanup Time" ],
            [ "teVOOP20CKM", "Give Me Something" ],
            [ "KXJZgwAWvnA", "I'm Losing You" ],
            [ "cI0qusXPD6w", "I'm Moving On" ],
            [ "Lt3IOdDE5iA", "Beautiful Boy (Darling Boy)" ],
            [ "uVXR2LYeFBI", "Watching the Wheels" ],
            [ "buSi5Gn5BdM", "Yes, I'm Your Angel" ],
            [ "ZhfWiU8wGCc", "Woman" ],
            [ "o31vrQRI9sA", "Beautiful Boys" ],
            [ "7htvdqzp6gY", "Dear Yoko" ],
            [ "nM-7AgMbPZ4", "Every Man Has A Woman Who Loves Him" ],
            [ "5mqzw7zgQNI", "Hard Times Are Over" ]
        ]
    } ],
    [ "Michael Jackson", "HIStory: Past, Present and Future, Book I", "	2:28:51", "1995", "history-past-present-and-future-book-1.jpg", {
        id: "S8Qrj9Gtzy0",
        list: [
            [ 0, "Billie Jean" ],
            [ 293, "The Way You Make Me Feel" ],
            [ 591, "Black or White" ],
            [ 847, "Rock With You" ],
            [ 1067, "She's Out Of My Life" ],
            [ 1284, "Bad" ],
            [ 1532, "I Just Can't Stop Loving You (ft. Siedah Garret)" ],
            [ 1784, "Man in the Mirror" ],
            [ 2103, "Thriller" ],
            [ 2460, "Beat It" ],
            [ 2719, "The Girl Is Mine (ft. Paul McCartney)" ],
            [ 2940, "Remember the Time" ],
            [ 3180, "Don't Stop 'Til You Get Enough" ],
            [ 3544, "Wanna Be Startin' Somethin'" ],
            [ 3907, "Heal the World" ],
            [ 4292, "Scream (ft. Janet Jackson)" ],
            [ 4572, "They Don't Care About Us" ],
            [ 4860, "Stranger In Moscow" ],
            [ 5198, "This Time Around (ft. Notorius B.I.G.)" ],
            [ 5464, "Earth Song" ],
            [ 5866, "D.S." ],
            [ 6166, "Money" ],
            [ 6437, "Come Together" ],
            [ 6680, "You Are Not Alone" ],
            [ 7025, "Childhood" ],
            [ 7293, "Tabloid Junkie" ],
            [ 7573, "2 Bad (ft. Shaquille O'Neal)" ],
            [ 7859, "HIStory" ],
            [ 8286, "Little Susie" ],
            [ 8633, "Smile" ]
            
        ]
    } ],
    [ "Sylvia Woods", "3 Harps for Christmas", "33:26", "1985", "3-harps-for-christmas.jpg", {
        list: [
            [ "gOFQ_VjNgaQ", "Angelical Hymn / Twelfth Night Song" ],
            [ "qxSnY4MS4eU", "Coventry Carol / While Shepherds Watched / First Noel" ],
            [ "UlK9T0m44Nk", "Lo, How a Rose / O Sanctissima" ],
            [ "aCRdB95hES0", "I Saw Three Ships / Christ was Born / Gloucestershire Wassail" ],
            [ "4x2EkMkklNc", "Angels We Have Heard on High / Ding Dong Merrily On High" ],
            [ "23xpWUUJFhY", "Oxen and Sheep / O Come Emmanuel" ],
            [ "VsfWoX_i5ao", "Up on the House Top / Jing Bells / We Wish You a Merry Christmas" ],
            [ "3Uvp_WpHMwY", "Away in a Manger / O Come, Little Children" ],
            [ "K7SqXe2eguY", "Hark! The Herald Angels/O Come All Ye Faithful/Joy to the World" ],
            [ "XfZWZzbcmLE", "He is Born / Bring a Torch, Jeannette Isabella" ],
            [ "3rN_CYOdC3s", "Silent Night" ],
            [ "UszkhLD88CY", "What Child is This?" ],
            [ "gi9UhTK5yg8", "Twelve Days of Christmas / Deck the Halls" ]
        ]
    } ],
    [ "Gene Pitney", "Town Without Pity", "2:52", "1961", "town-without-pity.jpg", {
        list: [
            [ "CkcvQQTe9Mw", "Town Without Pity" ]
        ]
    } ],
    [ "Madonna", "True Blue", "40:20", "1986", "true-blue.png", {
        list: [
            [ "6CuZARbr8o4", "Papa Don't Preach" ],
            [ "CgiXvxyArw8", "Open Your Heart" ],
            [ "EGTvba7mqA0", "White Heat" ],
            [ "lWA2Lt4Se40", "Live to Tell" ],
            [ "JctrnOLbxJk", "Where's the Party" ],
            [ "xulYPHvxp2E", "True Blue" ],
            [ "JZZWHnK6piM", "La Isla Bonita" ],
            [ "pn814m6y76g", "Jimmy Jimmy" ],
            [ "ZiPGYK8kLRM", "Love Makes the World Go Round" ]
        ]
    } ],
    [ "Isao Tomita", "Snowflakes Are Dancing", "41:33", "1974", "snowflakes-are-dancing.jpeg", {
        list: [
            [ "hWlSenLsXCI", "Snowflakes Are Dancing" ],
            [ "qkENf2IhhA8", "Reverie" ],
            [ "9LMazkgIDwc", "Gardens In The Rain" ],
            [ "sRRk7JChSts", "Clair De Lune" ],
            [ "rL0H7OAD8e0", "Arabesque No.1" ],
            [ "KcEqKyLZWMI", "The Engulfed Cathedral" ],
            [ "Qdhg8HM4zes", "Passepied" ],
            [ "iWjJL4jUjuk", "The Girl With The Flaxen Hair" ],
            [ "8aX1PJ3kLJ4", "Golliwog's Cakewalk" ],
            [ "0DD_3VlumvU", "Footprints In The Snow" ]
        ]
    } ],
    [ "Klaus Schulze", "Timewind", "59:13", "1975", "timewind.jpg", {
        list: [
            [ "J1vs3Xb7K0o", "Bayreuth Return" ],
            [ "wtY7B4bSVqs", "Wahnfried 1883" ]
        ]
    } ],
    [ "Mannheim Steamroller", "Fresh Aire II", "35:47", "1977", "fresh-aire-ii.jpg", {
        id: "V3Et_W4T7Lk",
        list: [
            [ 0, "Chorale" ],
            [ 36, "The First Door – Interrupted Thought" ],
            [ 122, "The Second Door – The Ugly Head of Greed" ],
            [ 244, "The Third Door – Pride" ],
            [ 394, "The Fourth Door – Relaxation" ],
            [ 624, "The Fifth Door – Frenetic Energy" ],
            [ 803, "The Sixth Door – Nostalgia" ],
            [ 894, "Door Seven – Thermal Inversion" ],
            [ 1012, "Fantasy" ],
            [ 1095, "Interlude V" ],
            [ 1311, "Velvet Tear" ],
            [ 1476, "A Shade Tree" ],
            [ 1774, "Toota Lute" ],
            [ 1944, "Going to Another Place" ]
        ]
    } ],
    [ "Mannheim Steamroller", "Fresh Aire III", "33:47", "1979", "fresh-aire-iii.jpg", {
        id: "6wL2VvmR5MM",
        list: [
            [ 0, "Toccata" ],
            [ 276, "Small Wooden Bach'ses" ],
            [ 437, "Amber" ],
            [ 604, "Mere Image" ],
            [ 1015, "Morning" ],
            [ 1189, "Interlude 6" ],
            [ 1360, "The Cricket" ],
            [ 1524, "The Sky" ],
            [ 1825, "Midnight on a Full Moon" ]
        ]
    } ],
    [ "Bernie Krause", "Equator", "32:00", "1986", "equator.jpg", {
        id: "pL8xuN53r-w",
        list: [
            [ 0, "Still Life at the Equator " ],
            [ 978, "Sea Dance" ]
        ]
    } ],
    [ "Rickie Lee Jones", "Flying Cowboys", "55:17", "1989", "flying-cowboys.jpg", {
        list: [
            [ "S-dMuyk5Pfc", "The Horses" ],
            [ "MdMRoseiMSE", "Just My Baby" ],
            [ "j_nKYBChneQ", "Ghetto Of My Mind" ],
            [ "XZyN6yY4n-k", "Rodeo Girl" ],
            [ "GxeRSmzX_00", "Satellites" ],
            [ "NM__lkAXyTs", "Ghost Train" ],
            [ "q7Gs1mDFuEM", "Flying Cowboys" ],
            [ "dqTuI1fSk_A", "Don't Let The Sun Catch You Crying" ],
            [ "X3SZp2qZXxM", "Love Is Gonna Bring Us Back Alive" ],
            [ "ROtfJTRwr2M", "Away From The Sky" ],
            [ "-MvFBadZyVQ", "Atlas' Marker" ]
        ]
    } ],
    [ "Loreena McKennitt", "The Visit", "49:10", "1991", "the-visit.jpg", {
        list: [
            [ "xUwBN2paN6I", "All Souls Night" ],
            [ "rUdSaiMlgQw", "Bonny Portmore" ],
            [ "FyKyWtYdpEI", "Between the Shadows" ],
            [ "H7ZEsCo5XSo", "The Lady of Shalott" ],
            [ "dkVtUtJ4CVk", "Greensleeves" ],
            [ "cIOjvtQCWbU", "Tango to Evora" ],
            [ "0_r7xYUjiqs", "Courtyard Lullaby" ],
            [ "S3AyIDNQF88", "The Old Ways" ],
            [ "TeRZur_f3Y8", "Cymbeline" ]
        ]
    } ],
    [ "R.E.M.", "Out of Time", "44:08", "1991", "out-of-time.jpg", {
        list: [
            [ "0XhYEqz2Hu8", "Radio Song" ],
            [ "xwtdhWltSIg", "Losing My Religion" ],
            [ "QqVI_CHlFAI", "Low" ],
            [ "oC7er_6dpsI", "Near Wild Heaven" ],
            [ "-3coDah-ZQU", "Endgame" ],
            [ "YYOKMUTTDdA", "Shiny Happy People" ],
            [ "UOtcV_6wfxQ", "Belong" ],
            [ "u3KMOGAm2Rs", "Half A World Away" ],
            [ "p16q-w2OuI4", "Texarkana" ],
            [ "6EHBh1FuY1Q", "Country Feedback" ],
            [ "uDucg0E4kMI", "Me In Honey" ]
        ]
    } ],
    [ "Bob Marley", "Rastaman Vibration", "35:21", "1976", "rastaman-vibration.jpg", {
        list: [
            [ "b0DU5uhoq", "Positive Vibration" ],
            [ "OQYmGg3mKHg", "Roots, Rock, Reggae" ],
            [ "lD4kLBwuWns", "Johnny Was" ],
            [ "m0fK46ddlGc", "Cry To Me" ],
            [ "Hh62kjQVSUU", "Want More" ],
            [ "IXckkQKY6Kk", "Crazy Baldhead" ],
            [ "X3lT1CivkLo", "Who The Cap Fit" ],
            [ "c_0yU0Vay4M", "Night Shift" ],
            [ "-JwL3lPBQ5E", "War" ],
            [ "MQcsQ8VGx6o", "Rat Race " ]
        ]
    } ],
    [ "Pink Floyd", "The Dark Side of the Moon", "43:09", "1973", "the-dark-side-of-the-moon.png", {
        list: [
            [ "HW-lXjOyUWo", "Speak To Me" ],
            [ "Vddl9TK5RqU", "Breathe (In The Air)" ],
            [ "2sUyk5zSbhM", "On The Run" ],
            [ "pgXozIma-Oc", "Time" ],
            [ "mPGv8L3a_sY", "The Great Gig In The Sky" ],
            [ "rwPM01cbQBc", "Money" ],
            [ "GKiLEgAzFDQ", "Us And Them" ],
            [ "_83urK9rO4U", "Any Colour You Like" ],
            [ "BhYKN21olBw", "Brain Damage" ],
            [ "9wjZrswriz0", "Eclipse" ]
        ]
    } ],
    [ "Bruce Springsteen", "Born in the U.S.A.", "46:57", "1984", "born-in-the-usa.jpg", {
        list: [
            [ "tRx212PUa4g", "Born in the U.S.A." ],
            [ "s3tqIk8TPWM", "Cover Me" ],
            [ "1t5JvmqTx94", "Darlington County" ],
            [ "5OEA9_Gtims", "Working on the Highway" ],
            [ "2WPJT6VZxlo", "Downbound Train" ],
            [ "1VxFS5-klfk", "I'm On Fire" ],
            [ "txKhQ9cbhgo", "No Surrender" ],
            [ "iGR_Rk74tOk", "Bobby Jean" ],
            [ "FDePd-mHOL4", "I'm Goin' Down" ],
            [ "GLBnj159q3s", "Glory Days" ],
            [ "nCFTL4IO6t4", "Dancing In the Dark" ],
            [ "KrGi8ODOWR0", "My Hometown" ]
        ]
    } ],
    [ "The Pointer Sisters", "So Excited!", "", "1982", "so-excited.jpg", {
        list: [
            [ "I57hkclh3kk", "I'm So Excited" ],
            [ "jzcB5U9hksw", "See How the Love Goes" ],
            [ "H9LB3g4kvU4", "All of You" ],
            [ "NIEmZAvikJA", "Heart Beat" ],
            [ "iW_-v9BeFa8", "If You Wanna Get Back Your Lady" ],
            [ "RGs7Rpp-OtM", "I Feel for You" ],
            [ "AYzAxGSWz4g", "Heart to Heart" ],
            [ "ahHRaIpWsEY", "American Music" ]
            
        ]
    } ],
    [ "Clannad", "Anam", "38:37", "1990", "anam.jpg", {
        list: [
            [ "d9g1CsSxh7M", "Ri Na Cruinne" ],
            [ "uPJEgdPTcE0", "Anam" ],
            [ "bpq15UjoA44", "In Fortune's Hand" ],
            [ "jOhkq0KONAA", "Poison Glen" ],
            [ "YxDUwWgZv1I", "Wilderness" ],
            [ "xeNz7xkVzOA", "Why Worry?" ],
            [ "rqpdkVUrj2c", "Uirchill An Chreagain " ],
            [ "sfgm_b-qe88", "Love And Affection" ],
            [ "B4-N9y3-ux8", "You're the One" ],
            [ "9iRl1kPdNu4", "Dobhar" ]
        ]
    } ],
    [ "Enya", "Watermark", "39:42", "1988", "watermark.jpg", {
        list: [
            [ "NO5tb20qQnA", "Watermark" ],
            [ "Hd_DuEU6Mvg", "Cursum Perficio" ],
            [ "JYJISBzcW4o", "On Your Shore" ],
            [ "h2okudlHZL8", "Storms In Africa" ],
            [ "fhLhAK780aI", "Exile" ],
            [ "Trhxxt5nJsc", "Miss Clare Remembers" ],
            [ "mJYVWScH3p4", "Orinoco Flow" ],
            [ "KZZYc4Ml7kY", "Evening Falls" ],
            [ "mbD8FGGywrQ", "River" ],
            [ "PlHdnWPAcdc", "The Longship" ],
            [ "XbVpkItimvI", "Na Laetha Geal M'òige" ]
        ]
    } ],
    [ "Phil Collins", "No Jacket Required", "46:12", "1985", "no-jacket-required.png", {
        list: [
            [ "r0qBaBb1Y-U", "Sussudio" ],
            [ "IRFyFCFxCcM", "Only You Know And I Know" ],
            [ "bxeRD2_9jnA", "Long Long Way To Go" ],
            [ "1neTO6a1cw0", "I Don't Wanna Know" ],
            [ "zKVq-P3z5Vg", "One More Night" ],
            [ "cG9Ei-HyymE", "Don't Lose My Number" ],
            [ "4dZgeeTV9so", "Who Said I Would" ],
            [ "MmtRkhMiG1U", "Doesn't Anybody Stay Together Anymore" ],
            [ "T4IGcNTd5uk", "Inside Out" ],
            [ "sRY1NG1P_kw", "Take Me Home" ]
        ]
    } ],
    [ "Madonna", "Like a Prayer", "51:16", "1989", "like-a-prayer.png", {
        list: [
            [ "ilottRbDnGY", "Like a Prayer" ],
            [ "7MnlGbOs-go", "Express Yourself" ],
            [ "y_7xxojr6Fw", "Love Song" ],
            [ "R1Vm72XDljI", "Till Death Do Us Part" ],
            [ "5aZ0Xzzhufw", "Promise to Try" ],
            [ "5debHn6fqo4", "Cherish" ],
            [ "N3t_Pgom3WA", "Dear Jessie" ],
            [ "BIkR-1LN-fE", "Oh Father" ],
            [ "x46eGbMky-4", "Keep It Together" ],
            [ "MsE9AtQSc_o", "Spanish Eyes" ],
            [ "ADAXxWzmKr4", "Act of Contrition" ]
        ]
    } ],
    [ "Kate Bush", "The Dreaming", "43:25", "1982", "the-dreaming.png", {
        list: [
            [ "h_TM1CBX3wE", "Sat In Your Lap" ],
            [ "7CJ509_QIoE", "There Goes A Tenner" ],
            [ "jHzH3XfZqsw", "Pull Out The Pin" ],
            [ "B16RgN8-E28", "Suspended In Gaffa" ],
            [ "fBlox63041w", "Leave It Open" ],
            [ "yHWuKAIELu4", "The Dreaming" ],
            [ "61UZj0IxKxg", "Night Of The Swallow" ],
            [ "GtOuHSkZrx0", "All The Love" ],
            [ "7gYvPYZZL8I", "Houdini" ],
            [ "_uHUUwgGW5c", "Get Out Of My House" ]
        ]
    } ],
    [ "Christopher Cross", "Sailing", "4:15", "1980", "sailing.png", {
        list: [
            [ "MEO6gYCFbr0", "Sailing" ]
        ]
    } ],
    [ "Christopher Cross", "Every Turn of the World", "36:30", "1985", "every-turn-of-the-world.jpg", {
        list: [
            [ "CAIc1TquwMM", "Every Turn of the World" ],
            [ "yuVcgQ4iyqk", "Charm the Snake" ],
            [ "j7h9-Z7-abQ", "I Hear You Call" ],
            [ "JSf2G9av4us", "Don't Say Goodbye" ],
            [ "9WopkgiQ3ao", "It's You That Really Matters" ],
            [ "eU7dJMDeD_Y", "Love Is Love (In Any Language)" ],
            [ "_hlfEAVx6-A", "Swing Street" ],
            [ "DhraY2hmDh8", "Love Found a Home" ],
            [ "1shVI5KMWw4", "That Girl" ],
            [ "r0TXzy3vQ6s", "Open Your Heart" ]
        ]
    } ],
    [ "Bernie Krause", "Distant Thunder", "59:35", "1988", "distant-thunder.jpg", {
        list: [
            [ "xTSQUvAqDPc", "Distant Thunder" ]
        ]
    } ],
    [ "Tony Elman", "Shakin' Down The Acorns", "36:22", "1992", "shakin-down-the-acorns.jpg", {
        list: [
            [ "YJGoVf2cQKk", "Little Beggar Man/Angeline the Baker" ],
            [ "jrbosUobdxk", "Elzic's Farewell" ],
            [ "1MyPQW08l9U", "Farewell to Whiskey/Morning Star" ],
            [ "pmE9jZSdWuc", "Si Bheag Si Mhor" ],
            [ "-KohDOxDPZE", "Golden Slippers" ],
            [ "qm4PGIf7HTM", "Devil's Dream/Flowers of Edinburgh/Drowsy Maggie" ],
            [ "FyEJvAg8XLg", "Rights of Man" ],
            [ "Ar8iz_xo0jA", "Wind That Shakes the Barley/Morpeth Rant" ],
            [ "HZ05xeWzOX0", "Shakin' Down the Acorns/Over the Waterfall" ],
            [ "HGw_7Nw-ToQ", "Road to Lisdoonvarna/Swallowtail Jig/Irish Washerwoman" ],
            [ "d_63PcMrWxY", "Planxty George Brabazon" ],
            [ "kn4QKegTylw", "Pig Town Fling" ],
            [ "H3HAFGrCqpU", "Staten Island Hornpipe/Rose Tree" ],
            [ "lLTOYl4HF1o", "Star of the County Down" ]
        ]
    } ],
    [ "Éric Serra", "Le Grand Bleu", "4:45", "1988", "le-grand-bleu.jpg", {
        list: [
            [ "ko23koYtOfc", "Le Grand Bleu" ]
        ]
    } ],
    [ "Chi Coltrane", "Thunder and Lightning", "3:02", "1972", "thunder-and-lightning.jpg", {
        list: [
            [ "xze0QhGBidc", "Thunder and Lightning" ]
        ]
    } ],
    [ "J. J. Cale", "Naturally", "31:41", "1971", "naturally.jpg", {
        list: [
            [ "m8-NEYx-evg", "Call Me The Breeze" ],
            [ "rdRFdZdsdH0", "Call The Doctor" ],
            [ "JKbcXFvXn3E", "Don't Go To Strangers" ],
            [ "fyMNLcIc8gA", "Woman I Love" ],
            [ "nKSYkZqT4z4", "Magnolia" ],
            [ "b33GzUpAfUQ", "Clyde" ],
            [ "-tIsPPHHADg", "Crazy Mama" ],
            [ "mWPWP-26sJw", "Nowhere To Run" ],
            [ "hiHLG62Dz_o", "After Midnight" ],
            [ "RBW_P_Kg8EA", "River Runs Deep" ],
            [ "D3M377lUSbg", "Bringing It Back" ],
            [ "mZGDPZzVGK4", "Crying Eyes" ]
        ]
    } ],
    [ "Steel Pulse", "State of Emergency", "44:59", "1988", "state-of-emergency.jpg", {
        list: [
            [ "ESbUvyQt-IM", "State Of Emergency" ],
            [ "GG1WQ8maRlg", "Dead End Circuit" ],
            [ "EBeUlR1DC5g", "Steal A Kiss" ],
            [ "kenApVm0G94", "Hijacking" ],
            [ "lPov7N3M6vQ", "P.U.S.H" ],
            [ "Wf8BuI6pvSE", "Love This Reggae Music" ],
            [ "v8deB6dseGI", "Said You Was An Angel" ],
            [ "hCzUTtYPh9E", "Reaching Out" ],
            [ "Yv2k6auPV60", "Melting Pot" ],
            [ "xoJfOTLuz8M", "Disco Drop Out" ],
            [ "ZfbOwS3yBUo", "Reaching Out (Extended Version)" ]
        ]
    } ],
    [ "Joe Cocker", "Luxury You Can Afford", "42:10", "1978", "luxury-you-can-afford.jpg", {
        list: [
            [ "1uHEe26PL7U", "Fun Time" ],
            [ "grv63HDA1E8", "Watching the River Flow" ],
            [ "2xpFEeBXX9c", "Boogie Baby" ],
            [ "dlBqLDEv40s", "A Whiter Shade of Pale" ],
            [ "2K3o6-SuJqE", "I Can't Say No" ],
            [ "mDuE7A3Qh3s", "Southern Lady" ],
            [ "ECthwXH-NBY", "I Know (You Don't Want Me No More)" ],
            [ "YzcCwktJ5sA", "What You Did to Me Last Night" ],
            [ "oLS0PX4qTzQ", "Lady Put the Light Out" ],
            [ "Ziv2rtrAL_g", "Wasted Years" ],
            [ "JbFb8eVZGe4", "I Heard It Through the Grapevine" ]
        ]
    } ],
    [ "Shahin & Sepehr", "One Thousand & One Nights", "42:32", "1994", "one-thousand-one-night.png", {
        list: [
            [ "J5uUH74HT0c", "One Thousand & One Nights (Prelude)" ],
            [ "iR74tRPC4qA", "One Thousand & One Nights" ],
            [ "v0c3E-DtoXc", "Yasmine" ],
            [ "OXyohSrJmxE", "Tears Of Fire" ],
            [ "10IeE0XLHp4", "Middle Of The Night" ],
            [ "RxPOKAzXAmc", "Mediterranean Dream" ],
            [ "Oc9GUToIb7w", "Persia" ],
            [ "m7mVWwD8H3E", "Cuban Sky" ],
            [ "_pDKXsURpfY", "Feeling Good Love" ],
            [ "8HrtPv2_o0c", "Body & Soul" ],
            [ "XISA5sjfmJc", "Natasha" ]
        ]
    } ],
    [ "Shahin & Sepehr", "Aria", "51:06", "1996", "aria.png", {
        list: [
            [ "qjOE-TnRrpY", "Through Your Eyes" ],
            [ "dy1nti9eI6Q", "Cante Kian" ],
            [ "1YAIVvmclhU", "Leave It All Behind" ],
            [ "PiY6OS4sXyE", "Road To Shiraz" ],
            [ "l1m4hcU9c4s", "More Of You" ],
            [ "z5Rf-QsqvXY", "Jakarta" ],
            [ "hl-gxUe-NL4", "Clouds Over Rio" ],
            [ "3n-HIJLitUI", "Reunion" ],
            [ "wkrF-z1NGUE", "La Fortuna" ],
            [ "sEqPR1Dd_OU", "Return To Jakarta" ],
            [ "hJyRVJdIqQo", "Beyond Zagros" ],
            [ "9UPqFx-DCaA", "Three Faces - Common Ground" ]
        ]
    } ],
    [ "Toni Childs", "Union", "44:52", "1988", "union.jpg", {
        list: [
            [ "S00HHzXZUrg", "Don't Walk Away" ],
            [ "cnY40wqK1r4", "Walk and Talk Like Angels" ],
            [ "4WiEJIYfghU", "Toni Childs Stop Your Fussin'" ],
            [ "6gLc1PyRrcI", "Dreamer" ],
            [ "wZ_BRf8NZck", "Let The Rain Come Down" ],
            [ "xdFUzaytThM", "Zimbabwae" ],
            [ "Y022Hy-5FdQ", "Hush" ],
            [ "PBTHm_4tHAo", "Tin Drum" ],
            [ "PzuLdi4uok8", "Where's the Ocean" ]
        ]
    } ],
    [ "The Cure", "Kiss Me, Kiss Me, Kiss Me", "74:35", "1987", "kiss-me-kiss-me-kiss-me.jpg", {
        list: [
            [ "RtHlzJS61U0", "The Kiss" ],
            [ "JWPnYXldfY8", "Catch" ],
            [ "H6vtwyGNC5g", "Torture" ],
            [ "ob0CHu7ZyHM", "If Only Tonight We Could Sleep" ],
            [ "UwvsrDcUdu8", "Why Can't I Be You?" ],
            [ "lu3CtMCVRsw", "How Beautiful You Are" ],
            [ "f6lQCZGFFR4", "Snakepit" ],
            [ "HzL1mTh35Zw", "Hey You" ],
            [ "eQzsWgajrMI", "Just Like Heaven" ],
            [ "LEebBabnayw", "All I Want" ],
            [ "wHvOnfa7FXw", "Hot Hot Hot!!!" ],
            [ "cT8zZJhu0Q8", "One More Time" ],
            [ "6uvu8_s2Q5U", "Like Cockatoos" ],
            [ "COVF6UmaxNw", "Icing Sugar" ],
            [ "FlhnzQbcD3s", "Perfect Girl" ],
            [ "fYQ_IRwfdk8", "A Thousand Hours" ],
            [ "Q6MliqPPkCA", "Shiver And Shake" ],
            [ "E-0QB1b8wSg", "Fight" ]
        ]
    } ],
    [ "Phil Collins", "Face Value", "47:49", "1981", "face-.value.png", {
        list: [
            [ "cuHvKksNriE", "In The Air Tonight" ],
            [ "zQOx1OvNbrc", "This Must Be Love" ],
            [ "IRsjYtrcQd0", "Behind the Lines" ],
            [ "uh90i7oQ0Tg", "The Roof Is Leaking" ],
            [ "IvbFuxJ61IQ", "Droned" ],
            [ "GxJzW_bisMM", "Hand in Hand" ],
            [ "pHLR9AROF5w", "I Missed Again" ],
            [ "_fDbvclLRs8", "You Know What I Mean" ],
            [ "7jYPpARLUbo", "Thunder and Lightning" ],
            [ "HWgebUIBqXk", "I'm Not Moving" ],
            [ "RDqjpNUG7Z0", "If Leaving Me Is Easy" ],
            [ "B8gWU2CH32U", "Tomorrow Never Knows" ]
        ]
    } ],
    [ "Tina Turner", "Private Dancer", "44:02", "1984", "private-dancer.jpg", {
        list: [
            [ "uiIOmuFiy8E", "I Might Have Been Queen" ],
            [ "1avX1lX7gSs", "What's Love Got to Do with It" ],
            [ "QD98-WV3Wj8", "Show Some Respect" ],
            [ "xMrGBS3QT_w", "I Can't Stand the Rain" ],
            [ "AdmDuTBTnlg", "Better Be Good to Me" ],
            [ "_gdWabN2yZw", "Let's Stay Together" ],
            [ "LOycYEA57y0", "1984" ],
            [ "XZT3AuOGZwk", "Steel Claw" ],
            [ "FCMsBpkFJHM", "Private Dancer" ]
        ]
    } ],
    [ "Vivaldi", "Four Seasons", "42:00", "1725", "four-seasons.jpg", {
        id: "GRxofEmo3HA",
        list: [
            [ 0, "Spring: I. Allegro" ],
            [ 215, "Spring: II. Largo" ],
            [ 361, "Spring: III. Allegro pastorale" ],
            [ 626, "Summer: I. Allegro non molto" ],
            [ 948, "Summer: II. Adagio e piano - Presto a forte" ],
            [ 1075, "Summer: III. Presto" ],
            [ 1257, "Autumn: I. Allegro" ],
            [ 1578, "Autumn: II. Adagio molto" ],
            [ 1745, "Autumn: III. Allegro" ],
            [ 1965, "Winter: I. Allegro non molto" ],
            [ 2174, "Winter: II. Largo" ],
            [ 2313, "Winter: III. Allegro" ]
        ]
    } ],
    [ "", "Flashdance (soundtrack)", "36:52", "1983", "flashdance-soundtrack.jpg", {
        id: "JpqpPtzt9X4",
        list: [
            [ 4, "Irene Cara - Flashdance... What a Feeling" ],
            [ 241, "Shandi Sinnamon - He's a Dream" ],
            [ 450, "Helen St. John - Love Theme from Flashdance" ],
            [ 659, "Karen Kamon - Manhunt" ],
            [ 817, "Joe Esposito - Lady, Lady, Lady" ],
            [ 1070, "Laura Branigan - Imagination" ],
            [ 1290, "Donna Summer - Romeo" ],
            [ 1487, "Cycle V - Seduce Me Tonight" ],
            [ 1701, "Kim Carnes - I'll Be Here Where the Heart Is" ],
            [ 1977, "Michael Sembello - Maniac" ]
        ]
    } ],
    [ "The Pointer Sisters", "Break Out", "43:38", "1983", "break-out.jpg", {
        list: [
            [ "mZmC_QOuZns", "Jump" ],
            [ "HakRyuxkics", "Automatic" ],
            [ "BD18GH7ZK6w", "Baby Come and Get It" ],
            [ "LlZW3t8lWGs", "I Need You" ],
            [ "fMK8D8JjLnA", "Dance Electric" ],
            [ "TJ-F9gUP4dg", "Neutron Dance" ],
            [ "ZdpY0Hartb4", "Easy Persuasion" ],
            [ "IKYVC3T5GjA", "Nightline" ],
            [ "3b-9576ZOVQ", "Telegraph Your Love" ],
            [ "u8PAKKkPVvk", "Operator" ]
        ]
    } ],
    [ "Deep Forest", "Boheme", "41:13", "1995", "boheme.jpg", {
        list: [
            [ "cD-UOpERT-8", "Anasthasia" ],
            [ "DymQ_hHXfzk", "Bohemian Ballet" ],
            [ "zQEV-XemfcE", "Marta's Song" ],
            [ "Q5bfNBmCHt4", "Gathering" ],
            [ "1kcVwqodG8E", "Lament" ],
            [ "PU1wE9pt-Rk", "Bulgarian Melody" ],
            [ "3vXsqEdWFBk", "Deep Folk Song" ],
            [ "my9Rv_9-QtY", "Freedom Cry" ],
            [ "8xf4FykY7fY", "Twosome" ],
            [ "bB2Fx0hzqUs", "Cafe Europa" ],
            [ "B75DO2TI95E", "Katharina" ],
            [ "Zkc8YZ-ejbk", "Bohème" ]
        ]
    } ],
    [ "Madonna", "Like a Virgin", "38:34", "1984", "like-a-virgin.png", {
        list: [
            [ "6p-lDYPR2P8", "Material Girl" ],
            [ "PDbHQA5I-Ok", "Angel" ],
            [ "s__rX_WL100", "Like A Virgin" ],
            [ "kmaYjqpQ2hg", "Over and Over" ],
            [ "-oKl_4p-4Hc", "Love Don't Live Here Anymore" ],
            [ "SOhJHS7Rvrg", "Dress You Up" ],
            [ "47vUyyvh6ls", "Shoo-Bee-Doo" ],
            [ "xkVXoHZ-emA", "Pretender" ],
            [ "TYQuM5xUNtI", "Stay" ],
            [ "JCQPo6vjlb4", "Like A Virgin (Extended Dance Remix)" ],
            [ "Hu0k8HQB3xM", "Material Girl (Extended Dance Remix)" ]
        ]
    } ],
    [ "Donna Summer", "A Love Trilogy", "33:49", "1976", "a-love-trilogy.jpg", {
        list: [
            [ "95aLVnE90EA", "Try Me, I Know We Can Make It" ],
            [ "xDw7Er5CcSE", "Prelude To Love" ],
            [ "3G8FJPdhSOY", "Could It Be Magic" ],
            [ "p3gMdjOjkVU", "Wasted" ],
            [ "QFEKpvdUgeM", "Come With Me" ]
        ]
    } ],
    [ "Kim Carnes", "Barking at Airplanes", "42:46", "1985", "barking-at-airplanes.png", {
        list: [
            [ "-kLdhOF3xJI", "Crazy In The Night (Barking At Airplanes)" ],
            [ "NkmcCVgDzUE", "One Kiss" ],
            [ "RKtw81Qrcck", "Begging For Favors (Learning How Things Work)" ],
            [ "ZJS__ffJbn8", "He Makes The Sun Rise (Orpheus)" ],
            [ "CiyswBi_LwQ", "Bon Voyage" ],
            [ "ydHIQ6W9Uwc", "Don't Pick Up The Phone (Pick Up The Phone)" ],
            [ "21hi2PPMfS8", "Rough Edges" ],
            [ "f2GX38BsHHc", "Abadabadango" ],
            [ "rlFMqLmLXHk", "Touch And Go" ],
            [ "BDx5nQEDFk8", "Oliver (Voice On The Radio)" ]
        ]
    } ],
    [ "Sade", "Promise", "54:10", "1985", "promise.png", {
        list: [
            [ "uScPm9AQYjw", "Is It a Crime?" ],
            [ "RcejfvTXusM", "The Sweetest Taboo" ],
            [ "IjpjnOIHIdI", "War of the Hearts" ],
            [ "jCHKnC0bLIo", "You're Not the Man" ],
            [ "nd9aMPns4jE", "Jezebel" ],
            [ "NFgFnQP9UiU", "Mr Wrong" ],
            [ "UT14prvQ1tk", "Punch Drunk" ],
            [ "xhBm4Xqf-Y4", "Never as Good as the First Time" ],
            [ "TMg97Jq8R20", "Fear" ],
            [ "iTXeB9lfGhM", "Tar Baby" ],
            [ "kWAS-Y7zcmY", "Maureen" ]
        ]
    } ],
    [ "Kate Bush", "Hounds of Love", "47:33", "1985", "hounds-of-love.png", {
        list: [
            [ "wp43OdtAAkM", "Running Up That Hill" ],
            [ "VerK4zwMRQw", "Hounds of Love" ],
            [ "sV7w5TaYjRA", "The Big Sky" ],
            [ "ESRpQurzJsg", "Mother Stands For Comfort" ],
            [ "pllRW9wETzw", "Cloudbusting" ],
            [ "xr7OFyFXEH8", "And Dream Of Sheep" ],
            [ "lQRGWTIAgL0", "Under Ice" ],
            [ "EVdTZ7gYuqE", "Waking The Witch" ],
            [ "fFla-qsswpA", "Watching You Without Me" ],
            [ "PqUlRsF8JbU", "Jig Of Life" ],
            [ "a2jIaTfOGE4", "Hello Earth" ],
            [ "1Fh1UMVU_TI", "The Morning Fog" ]
        ]
    } ],
    [ "Sheryl Crow", "Tuesday Night Music Club", "49:42", "1993", "tuesday-night-music-club.png", {
        list: [
            [ "3CUr0bnDCfM", "Run, Baby, Run" ],
            [ "Xkc-en0_LGY", "Leaving Las Vegas" ],
            [ "z-UexxCPuGA", "Strong Enough" ],
            [ "kW3Hzedn7D4", "Can't Cry Anymore" ],
            [ "ihvix2S5CdY", "Solidify" ],
            [ "zn955E07BJk", "The Na-Na Song" ],
            [ "Rn3q2UawF3s", "No One Said It Would Be Easy" ],
            [ "Sxjl3ejBYwA", "What I Can Do For You" ],
            [ "RiOtjXUpflY", "All I Wanna Do" ],
            [ "GDElHjyN_Eg", "We Do What We Can" ],
            [ "8CHmVpxK6h0", "I Shall Believe" ]
        ]
    } ],
    [ "Joan Armstrong", "Track Record", "47:09", "1983", "track-record.jpg", {
        list: [
            [ "bzdUkXiVljY", "Drop The Pilot" ],
            [ "KbPY1U_yslY", "[I Love It When You] Call Me Names" ],
            [ "uJIPDtMbSd8", "Frustration" ],
            [ "Z7dZ9vdHsxU", "When I Get It Right" ],
            [ "fRv-pYyMD6A", "I'm Lucky" ],
            [ "MAu-Pf64dEs", "Me Myself I" ],
            [ "zr9GFGxHa40", "The Weakness In Me" ],
            [ "hPulfk3oPoo", "Heaven" ],
            [ "H-MDw3S0NU8", "Down To Zero" ],
            [ "Qke81PHKx8E", "Love And Affection" ],
            [ "6iDfQ_r_thE", "Show Some Emotion" ],
            [ "Sx-HgVuPw8k", "Willow" ],
            [ "CEIZv1FzLhM", "Rosie" ]
        ]
    } ]
];