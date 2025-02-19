import { ComicResponse } from "@/modules/comic/comic.response.interface";

export const COMIC_RESPONSE: ComicResponse = {
  code: 200,
  status: "Ok",
  copyright: "© 2024 MARVEL",
  attributionText: "Data provided by Marvel. © 2024 MARVEL",
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
  etag: "0e86fbbc30229cc8e390eb70e3275030b04edc5b",
  data: {
    offset: 0,
    limit: 20,
    total: 4,
    count: 4,
    results: [
      {
        id: 47176,
        digitalId: 30661,
        title: "FREE COMIC BOOK DAY 2013 1 (2013) #1",
        issueNumber: 1,
        variantDescription: "",
        description: "",
        modified: "2019-06-25T17:31:51-0400",
        isbn: "",
        upc: "75960607889900111",
        diamondCode: "",
        ean: "",
        issn: "",
        format: "Comic",
        pageCount: 32,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "It's out action featuring the newest stars to be of Disney XD: Avengers and the Hulk and the Agents of S.M.A.S.H.! Featuring art pulled directly from the animated series, this sneak peek at the two newest animated series from the geniuses at Marvel Animation promises to make this the best yet!",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/47176",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/47176/free_comic_book_day_2013_1_2013_1?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "purchase",
            url: "http://comicstore.marvel.com/FREE-COMIC-BOOK-DAY-2013-1-1/digital-comic/30661?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "reader",
            url: "http://marvel.com/digitalcomics/view.htm?iid=30661&utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "inAppLink",
            url: "https://applink.marvel.com/issue/30661?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/17765",
          name: "FREE COMIC BOOK DAY 2013 1 (2013)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2013-03-20T00:00:00-0400",
          },
          {
            type: "focDate",
            date: "2013-03-04T00:00:00-0500",
          },
          {
            type: "unlimitedDate",
            date: "2013-11-04T00:00:00-0500",
          },
          {
            type: "digitalPurchaseDate",
            date: "2013-07-09T00:00:00-0400",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 0.2,
          },
          {
            type: "digitalPurchasePrice",
            price: 0,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3",
            extension: "jpg",
          },
        ],
        creators: {
          available: 3,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/47176/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/13586",
              name: "Joe Caramagna",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/5251",
              name: "Vc Joe Caramagna",
              role: "letterer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/11879",
              name: "Stephen Wacker",
              role: "editor",
            },
          ],
          returned: 3,
        },
        characters: {
          available: 5,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/47176/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1017100",
              name: "A-Bomb (HAS)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1017098",
              name: "Hulk (HAS)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1017099",
              name: "Red Hulk (HAS)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1017111",
              name: "She-Hulk (HAS)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1017101",
              name: "Skaar (HAS)",
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/47176/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/105929",
              name: "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/105930",
              name: "story from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/47176/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 40632,
        digitalId: 26673,
        title: "Hulk (2008) #53",
        issueNumber: 53,
        variantDescription: "",
        description:
          "The Mayan Gods are here! Guest starring Alpha Flight, Machine Man, She-Hulks, A-Bomb!",
        modified: "2012-06-12T15:18:39-0400",
        isbn: "",
        upc: "5960605992-05311",
        diamondCode: "APR120637",
        ean: "",
        issn: "1941-2142",
        format: "Comic",
        pageCount: 32,
        textObjects: [
          {
            type: "issue_preview_text",
            language: "en-us",
            text: "The Mayan Gods are here! Guest starring Alpha Flight, Machine Man, She-Hulks, A-Bomb!",
          },
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "<ul><li> MAYAN GODS!!!</li><li> END OF THE WORLD AS WE KNOW IT!!!</li><li> Guest starring Alpha Flight, Machine Man, She-Hulks, A-Bomb!!!</li><ul>",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40632",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/40632/hulk_2008_53?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "purchase",
            url: "http://comicstore.marvel.com/Hulk-53/digital-comic/26673?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "reader",
            url: "http://marvel.com/digitalcomics/view.htm?iid=26673&utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "inAppLink",
            url: "https://applink.marvel.com/issue/26673?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
          name: "Hulk (2008 - 2012)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2012-06-06T00:00:00-0400",
          },
          {
            type: "focDate",
            date: "2012-05-23T00:00:00-0400",
          },
          {
            type: "unlimitedDate",
            date: "2013-04-08T00:00:00-0400",
          },
          {
            type: "digitalPurchaseDate",
            date: "2012-06-06T00:00:00-0400",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99,
          },
          {
            type: "digitalPurchasePrice",
            price: 1.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4fda53e6d27e6",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/4/00/4f61149e5657d",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/30/4f61149e60cc2",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/90/4f61149ca2982",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4f61148f0cef8",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/4f61148f0de13",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/4f61148f19c6b",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/70/4f61148f162a8",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/4f61148ed3870",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4f61148ea56ef",
            extension: "jpg",
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40632/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/11482",
              name: "Jesus Aburtov",
              role: "colorist",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/10172",
              name: "Vc Clayton Cowles",
              role: "letterer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/3646",
              name: "Dale Eaglesham",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/4600",
              name: "Mark Paniccia",
              role: "editor",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/824",
              name: "Jeff Parker",
              role: "writer",
            },
          ],
          returned: 5,
        },
        characters: {
          available: 12,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40632/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1017100",
              name: "A-Bomb (HAS)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010370",
              name: "Alpha Flight",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009163",
              name: "Aurora",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009330",
              name: "Guardian",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010805",
              name: "Machine Man",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009513",
              name: "Puck",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011360",
              name: "Red Hulk",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009560",
              name: "Sasquatch (Walter Langkowski)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009583",
              name: "She-Hulk (Jennifer Walters)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011392",
              name: "She-Hulk (Lyra)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009606",
              name: "Snowbird",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011003",
              name: "Thaddeus Ross",
            },
          ],
          returned: 12,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40632/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/92086",
              name: "Hulk (2008) #53",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/92087",
              name: "Interior #92087",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40632/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 40630,
        digitalId: 26830,
        title: "Hulk (2008) #54",
        issueNumber: 54,
        variantDescription: "",
        description:
          "Mayan Gods! End of the world as we know it! Guest starring Alpha Flight, Machine Man, She-Hulks, A-Bomb!",
        modified: "2012-06-11T17:31:00-0400",
        isbn: "",
        upc: "5960605992-05411",
        diamondCode: "APR120638",
        ean: "",
        issn: "1941-2142",
        format: "Comic",
        pageCount: 32,
        textObjects: [
          {
            type: "issue_preview_text",
            language: "en-us",
            text: "Mayan Gods! End of the world as we know it! Guest starring Alpha Flight, Machine Man, She-Hulks, A-Bomb!",
          },
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "<ul><li> MAYAN GODS!!!</li><li> END OF THE WORLD AS WE KNOW IT!!!</li><li> Guest starring Alpha Flight, Machine Man, She-Hulks, A-Bomb!!!</li><ul>",
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40630",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/40630/hulk_2008_54?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032",
          },
          {
            type: "purchase",
            url: "http://comicstore.marvel.com/Hulk-54/digital-comic/26830?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032",
          },
          {
            type: "reader",
            url: "http://marvel.com/digitalcomics/view.htm?iid=26830&utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032",
          },
          {
            type: "inAppLink",
            url: "https://applink.marvel.com/issue/26830?utm_campaign=apiRef&utm_source=af4ce9272a311153844509e7a5478032",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
          name: "Hulk (2008 - 2012)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2012-06-20T00:00:00-0400",
          },
          {
            type: "focDate",
            date: "2012-06-06T00:00:00-0400",
          },
          {
            type: "unlimitedDate",
            date: "2013-04-08T00:00:00-0400",
          },
          {
            type: "digitalPurchaseDate",
            date: "2012-06-20T00:00:00-0400",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99,
          },
          {
            type: "digitalPurchasePrice",
            price: 1.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/4fda542847591",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/60/4fc8d95b0262b",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/a/00/4fc8d95ac1955",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/7/10/4fc8d95a95541",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/04/4fc8d95a9bf6c",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4fc8d95abb4a6",
            extension: "jpg",
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40630/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/11482",
              name: "Jesus Aburtov",
              role: "colorist",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/832",
              name: "Val Staples",
              role: "colorist",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/10172",
              name: "Vc Clayton Cowles",
              role: "letterer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/3646",
              name: "Dale Eaglesham",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/4600",
              name: "Mark Paniccia",
              role: "editor",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/824",
              name: "Jeff Parker",
              role: "Writer",
            },
          ],
          returned: 6,
        },
        characters: {
          available: 11,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40630/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1017100",
              name: "A-Bomb (HAS)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010370",
              name: "Alpha Flight",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009163",
              name: "Aurora",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009330",
              name: "Guardian",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010805",
              name: "Machine Man",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009513",
              name: "Puck",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011360",
              name: "Red Hulk",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009560",
              name: "Sasquatch (Walter Langkowski)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009583",
              name: "She-Hulk (Jennifer Walters)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011392",
              name: "She-Hulk (Lyra)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009606",
              name: "Snowbird",
            },
          ],
          returned: 11,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40630/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/92082",
              name: "Hulk (2008) #54",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/92083",
              name: "Interior #92083",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40630/events",
          items: [],
          returned: 0,
        },
      },
      {
        id: 40628,
        digitalId: 27099,
        title: "Hulk (2008) #55",
        issueNumber: 55,
        variantDescription: "",
        description:
          'The hands of the doomsday clock race towards MAYAN RULE! Former Avengers arrive to help stop the end of the world as more Mayan gods return. Rick "A-Bomb" Jones falls in battle!',
        modified: "2012-06-19T11:48:47-0400",
        isbn: "",
        upc: "5960605992-05511",
        diamondCode: "MAY120687",
        ean: "",
        issn: "1941-2142",
        format: "Comic",
        pageCount: 32,
        textObjects: [
          {
            type: "issue_solicit_text",
            language: "en-us",
            text: "<ul><li> The hands of the doomsday clock race towards MAYAN RULE!!!\n</li><li> Former Avengers arrive to help stop the end of the world as more Mayan gods return.\n</li><li> Rick &quot;A-Bomb&quot; Jones falls in battle!</li></ul>",
          },
          {
            type: "issue_preview_text",
            language: "en-us",
            text: 'The hands of the doomsday clock race towards MAYAN RULE! Former Avengers arrive to help stop the end of the world as more Mayan gods return. Rick "A-Bomb" Jones falls in battle!',
          },
        ],
        resourceURI: "http://gateway.marvel.com/v1/public/comics/40628",
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/comics/issue/40628/hulk_2008_55?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "purchase",
            url: "http://comicstore.marvel.com/Hulk-55/digital-comic/27099?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "reader",
            url: "http://marvel.com/digitalcomics/view.htm?iid=27099&utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
          {
            type: "inAppLink",
            url: "https://applink.marvel.com/issue/27099?utm_campaign=apiRef&utm_source=7e242a53b180d2bb15fa0f48015a20b6",
          },
        ],
        series: {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3374",
          name: "Hulk (2008 - 2012)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: "onsaleDate",
            date: "2012-07-04T00:00:00-0400",
          },
          {
            type: "focDate",
            date: "2012-06-20T00:00:00-0400",
          },
          {
            type: "unlimitedDate",
            date: "2013-04-08T00:00:00-0400",
          },
          {
            type: "digitalPurchaseDate",
            date: "2012-07-04T00:00:00-0400",
          },
        ],
        prices: [
          {
            type: "printPrice",
            price: 2.99,
          },
          {
            type: "digitalPurchasePrice",
            price: 1.99,
          },
        ],
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5ba3d0869c543",
          extension: "jpg",
        },
        images: [
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5ba3d0869c543",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4fda5398edc41",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4fda539915bf3",
            extension: "jpg",
          },
          {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4fda5398a0685",
            extension: "jpg",
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40628/creators",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/10172",
              name: "Vc Clayton Cowles",
              role: "letterer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/3646",
              name: "Dale Eaglesham",
              role: "penciller (cover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/4600",
              name: "Mark Paniccia",
              role: "editor",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/824",
              name: "Jeff Parker",
              role: "writer",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/creators/832",
              name: "Val Staples",
              role: "colorist",
            },
          ],
          returned: 5,
        },
        characters: {
          available: 9,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40628/characters",
          items: [
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1017100",
              name: "A-Bomb (HAS)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010370",
              name: "Alpha Flight",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009220",
              name: "Captain America",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010854",
              name: "Living Lightning",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010805",
              name: "Machine Man",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011360",
              name: "Red Hulk",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1009583",
              name: "She-Hulk (Jennifer Walters)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1011392",
              name: "She-Hulk (Lyra)",
            },
            {
              resourceURI:
                "http://gateway.marvel.com/v1/public/characters/1010864",
              name: "Silverclaw",
            },
          ],
          returned: 9,
        },
        stories: {
          available: 2,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40628/stories",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/92078",
              name: "Hulk (2008) #55",
              type: "cover",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/stories/92079",
              name: "Interior #92079",
              type: "interiorStory",
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/comics/40628/events",
          items: [],
          returned: 0,
        },
      },
    ],
  },
};
