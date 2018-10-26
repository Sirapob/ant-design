webpackJsonp([174],{

/***/ 1833:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Display global messages as feedback in response to user operations."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "To provide feedback such as success, warning, error etc."
        ]
      ],
      [
        "li",
        [
          "p",
          "A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Feedback",
    "noinstant": true,
    "title": "Message",
    "filename": "components/message/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#When-To-Use",
          "title": "When To Use"
        },
        "When To Use"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "p",
      "This components provides some static methods, with usage and arguments as following:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "message.success(content, [duration], onClose)"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "message.error(content, [duration], onClose)"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "message.info(content, [duration], onClose)"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "message.warning(content, [duration], onClose)"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "message.warn(content, [duration], onClose)"
          ],
          " // alias of warning"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "message.loading(content, [duration], onClose)"
          ]
        ]
      ]
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Argument"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "content"
          ],
          [
            "td",
            "content of the message"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "duration"
          ],
          [
            "td",
            "time(seconds) before auto-dismiss, don't dismiss if set to 0"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "1.5"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onClose"
          ],
          [
            "td",
            "Specify a function that will be called when the message is closed"
          ],
          [
            "td",
            "Function"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "p",
      [
        "code",
        "afterClose"
      ],
      " can be called in thenable interface:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "message[level](content, [duration]).then(afterClose)"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "message[level](content, [duration], onClose).then(afterClose)"
          ]
        ]
      ]
    ],
    [
      "p",
      "where ",
      [
        "code",
        "level"
      ],
      " refers one static methods of ",
      [
        "code",
        "message"
      ],
      ". The result of ",
      [
        "code",
        "then"
      ],
      " method will be a Promise."
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "message.open(config)"
          ]
        ]
      ]
    ],
    [
      "p",
      "The properties of config are as follows:"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "content"
          ],
          [
            "td",
            "content of the message"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "duration"
          ],
          [
            "td",
            "time(seconds) before auto-dismiss, don't dismiss if set to 0"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "3"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onClose"
          ],
          [
            "td",
            "Specify a function that will be called when the message is closed"
          ],
          [
            "td",
            "function"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "icon"
          ],
          [
            "td",
            "Customized Icon"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Global static methods"
    ],
    [
      "p",
      "Methods for global configuration and destruction are also provided:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "message.config(options)"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "message.destroy()"
          ]
        ]
      ]
    ],
    [
      "h4",
      "message.config"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "message<span class=\"token punctuation\">.</span><span class=\"token function\">config</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  top<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n  duration<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n  maxCount<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "message.config({\n  top: 100,\n  duration: 2,\n  maxCount: 3,\n});"
      ]
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Argument"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "duration"
          ],
          [
            "td",
            "time before auto-dismiss, in seconds"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "1.5"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getContainer"
          ],
          [
            "td",
            "Return the mount node for Message"
          ],
          [
            "td",
            "() => HTMLElement"
          ],
          [
            "td",
            "() => document.body"
          ]
        ],
        [
          "tr",
          [
            "td",
            "maxCount"
          ],
          [
            "td",
            "max message show, drop oldest if exceed limit"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "top"
          ],
          [
            "td",
            "distance from top"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "24"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});