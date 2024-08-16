import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:go_router/go_router.dart';
import 'package:url_launcher/url_launcher.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
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
            title: const Text('Ahmad Suleiman, Software Engineer'),
            actions: const [DownloadButton()]),
        body: ScrollConfiguration(
            behavior:
                ScrollConfiguration.of(context).copyWith(scrollbars: false),
            child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 8),
                child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    child: Wrap(children: <Widget>[
                      SizedBox(
                          width: 1000,
                          child: HtmlWidget(body,
                              textStyle:
                                  Theme.of(context).textTheme.bodyLarge)),
                      Padding(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 20, vertical: 40),
                          child: Column(children: [
                            Image.asset(width: 400, 'assets/images/me.png'),
                            const SizedBox(height: 20),
                            const Text(
                                'Detective Sherlock: This person above is Ahmad Suleiman')
                          ]))
                    ])))),
        bottomSheet: GestureDetector(
            onTap: () => showPolicyDialog(context),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Text('Privacy Policies',
                  style: Theme.of(context).textTheme.bodyLarge)
            ])));
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
            onPressed: () => openGooglePlayLink(),
            label:
                Text('My Apps', style: Theme.of(context).textTheme.labelLarge),
            icon: const FaIcon(FontAwesomeIcons.googlePlay)));
  }
}

void openGooglePlayLink() => launchUrl(
    Uri.parse('https://play.google.com/store/apps/dev?id=5382562347439530585'));

String get body => '''
 <body>
    <p><b>Hey there</b>, I'm Ahmad Suleiman, a passionate software engineer with a knack for 
    crafting innovative solutions. My expertise spans app development, API 
    creation, and data analysis. I thrive on transforming complex problems 
    into elegant software systems. Or, to put it simply, I like to build 
    impactful stuff!</p>
    
    <h2>Some of my stuff</h2>
    <ul>
      <li><b><a href="https://play.google.com/store/apps/details?id=com.meta4projects.fldfloatingdictionary">
      FLD Floating Dictionary:</a></b> A dictionary that allows you to look up 
      words instantly without leaving your current app. Save time and stay 
      focused.</li>
      <li><b><a href="https://play.google.com/store/apps/details?id=com.meta4projects.takenote">
      Take Note:</a></b> A note app that allows you to create subsections 
      within notes for better organization.</li>
      <li><b><a href="https://github.com/Ahmadu-Suleiman/WiPy">
      WiPy:</a></b> A web app that turns your computer into a local storage 
      repository that other devices on the same local network can connect to 
      and download files from.</li>
      <li><b><a href="https://github.com/Ahmadu-Suleiman/AgriAsk">
      AgriAsk:</a></b> An innovative SMS-based agricultural consultation 
      platform designed to empower farmers.</li>
      <li><b><a href="https://github.com/Ahmadu-Suleiman/AskAll">
      AskAll:</a></b> A revolutionary platform designed to provide Africans 
      with instant access to Gemini AI through SMS text, overcoming the 
      barriers of poor internet connectivity and limited access to information 
      and communication technology (ICT) tools.</li>
    </ul>
    
    <h2>Contact me (and also check out my other stuff)</h2>
    <ul>
      <li><b>Phone:</b> <a href="tel:+2348138445664">
      +234 813 844 5664</a></li>
      <li><b>Email:</b> <a href="mailto:ahmadumeta4.1@gmail.com">
      ahmadumeta4.1@gmail.com</a></li>
      <li><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/ahmad-suleiman-1a209a246/">
      https://www.linkedin.com/in/ahmad-suleiman-1a209a246/</a></li>
      <li><b>Github:</b> <a href="https://github.com/Ahmadu-Suleiman">
      https://github.com/Ahmadu-Suleiman</a></li>
    </ul>   
</body>
''';

void showPolicyDialog(BuildContext context) async {
  return showDialog<void>(
      context: context, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
            title: const Text('Privacy Policies'),
            content: SingleChildScrollView(
                child: Column(children: [
              TextButton(
                  onPressed: () => context.go('/fld-policy'),
                  child: const Text('FLD Floating Dictionary')),
              TextButton(
                  onPressed: () => context.go('/take-note-policy'),
                  child: const Text('Take Note')),
              TextButton(
                  onPressed: () => context.go('/hilarity-policy'),
                  child: const Text('Hilarity Jokes'))
            ])));
      });
}
