import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int currentImageIndex = 0;
  late Timer _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (Timer t) {
      setState(() => currentImageIndex = (currentImageIndex + 1) % 5);
    });
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: GestureDetector(
                onTap: () => setState(() {}),
                child: Image.asset(
                    width: 50, height: 50, 'assets/images/fld logo.png')),
            actions: const [DownloadButton()]),
        body: ListView(padding: const EdgeInsets.all(8), children: [
          HtmlWidget(description()),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 80),
            child: DownloadButton(),
          ),
          SizedBox(
              width: 400,
              height: 850,
              child: Image(
                  image: AssetImage(
                      'assets/fld_screenshots/$currentImageIndex.png')))
        ]));
  }
}

class DownloadButton extends StatelessWidget {
  const DownloadButton({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.all(8.0),
        child: TextButton.icon(
            style: ButtonStyle(
                backgroundColor: WidgetStateProperty.all(
                    Theme.of(context).colorScheme.inversePrimary)),
            onPressed: () => openFLDLink(),
            label:
                Text('Download', style: Theme.of(context).textTheme.labelLarge),
            icon: const FaIcon(FontAwesomeIcons.googlePlay)));
  }
}

void openFLDLink() => launchUrl(Uri.parse(
    'https://play.google.com/store/apps/details?id=com.meta4projects.fldfloatingdictionary'));

String description() => '''
<link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet">
<style>
  ul {
    list-style-type: disc;
  }
  li::before {
    content: "• ";
  }
</style>
</head>
<body>

<h1><b>Ahmad Suleiman</b> introduces <b>FLD Floating Dictionary</b>, <i>search word meanings instantly!</i></h1>

<h2>Why Choose FLD Floating Dictionary?</h2>
<ul>
  <li><b>Instant Access:</b> Look up words instantly without leaving your current app. Save time and stay focused.</li>
  <li><b>Comprehensive Definitions:</b> Get detailed definitions, synonyms, antonyms, and usage examples.</li>
  <li><b>Voice Search:</b> Use voice commands for hands-free convenience.</li>
  <li><b>Offline Access:</b> Access the dictionary even when you're offline.</li>
  <li><b>User-Friendly Interface:</b> Enjoy a sleek and intuitive design that makes learning enjoyable.</li>
</ul>

<h2>Key Features</h2>
<ul>
  <li><b>Instant Lookups:</b> Effortlessly search for definitions, synonyms, and antonyms.</li>
  <li><b>Voice Search:</b> Hands-free convenience - simply speak the word.</li>
  <li><b>Rich Definitions:</b> Explore in-depth explanations, examples, and parts of speech.</li>
  <li><b>Bookmarks:</b> Save your favorite words for easy reference.</li>
  <li><b>Etymology Insights:</b> Discover the fascinating history of words.</li>
  <li><b>Offline Access:</b> Learn anytime, anywhere, without an internet connection.</li>
  <li><b>Customizable Widget:</b> Quick access to your favorite words and definitions.</li>
  <li><b>Sleek Interface:</b> Enjoy a visually appealing and user-friendly design.</li>
</ul>

<h2>How It Works</h2>
<ol>
  <li>Download the App: Click the download button below to get FLD Floating Dictionary on your device.</li>
  <li>Install and Open: Follow the simple installation instructions.</li>
  <li>Start Searching: Use the floating widget to look up words instantly while using other apps.</li>
</ol>
''';
