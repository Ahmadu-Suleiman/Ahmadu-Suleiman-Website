import 'dart:js_interop';

import 'package:ahmadu_suleiman/gen/assets.gen.dart';
import 'package:ahmadu_suleiman/utils/extensions.dart';
import 'package:ahmadu_suleiman/utils/routes.dart';
import 'package:ahmadu_suleiman/utils/util.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';
import 'package:go_router/go_router.dart';
import 'package:web/web.dart' as web;

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Text('Ahmad Suleiman',
                style:
                    context.wordStyle?.addColor(context.colorScheme.onSurface)),
            actions: [downloadButton]),
        body: Row(children: [
          if (isNotPhoneWidth) navigationRail,
          Expanded(
              child: ScrollConfiguration(
                  behavior: ScrollConfiguration.of(context)
                      .copyWith(scrollbars: false),
                  child: Align(
                      alignment: isTextDirectionLeft
                          ? Alignment.topLeft
                          : Alignment.topRight,
                      child: SingleChildScrollView(
                          physics: const BouncingScrollPhysics(),
                          padding: const EdgeInsets.symmetric(horizontal: 12),
                          child:
                              Wrap(alignment: WrapAlignment.center, children: [
                            SizedBox(
                                width: 800,
                                child: HtmlWidget(body,
                                    textStyle: context.sentenceStyle?.addColor(
                                        context.colorScheme.onSurface))),
                            Padding(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 20, vertical: 40),
                                child: Column(spacing: 20, children: [
                                  Assets.images.me.image(width: 400),
                                  Text('Ahmad Suleiman',
                                      style: context.sentenceStyle?.addColor(
                                          context.colorScheme.onSurface))
                                ]))
                          ])))))
        ]));
  }

  bool get isNotPhoneWidth => MediaQuery.sizeOf(context).width > 800;

  bool get isTextDirectionLeft =>
      Directionality.of(context) == TextDirection.ltr;

  Widget get navigationRail => NavigationRail(
          selectedIndex: 0,
          onDestinationSelected: (int index) => setState(() {
                if (index == 1) context.goNamed(Routes.reThinkPage);
                if (index == 2) showPolicyDialog();
                if (index == 3) context.goNamed(Routes.cscUploadDetailsPage);
              }),
          labelType: NavigationRailLabelType.all,
          destinations: const <NavigationRailDestination>[
            NavigationRailDestination(
                icon: Icon(Icons.person_outline),
                selectedIcon: Icon(Icons.person),
                label: Text('My profile')),
            NavigationRailDestination(
                icon: Icon(Icons.eco_outlined),
                selectedIcon: Icon(Icons.eco),
                label: Text('ReThink')),
            NavigationRailDestination(
                icon: Icon(Icons.notes_outlined),
                selectedIcon: Icon(Icons.notes),
                label: Text('Privacy Policies ')),
            NavigationRailDestination(
                icon: Icon(Icons.computer), label: Text('CSC'))
          ]);

  Widget get downloadButton => Padding(
      padding: const EdgeInsets.all(8.0),
      child: TextButton.icon(
          style: TextButton.styleFrom(
              backgroundColor: context.colorScheme.inversePrimary),
          onPressed: downloadResume,
          label: Text('My Résumé',
              style:
                  context.labelStyle?.addColor(context.colorScheme.onSurface)),
          icon: const Icon(Icons.file_download)));

  void showPolicyDialog() async => showDialog<void>(
      context: context,
      builder: (BuildContext context) => AlertDialog(
          title: Text('Privacy Policies',
              style:
                  context.titleStyle?.addColor(context.colorScheme.onSurface)),
          content: SingleChildScrollView(
              child: Column(children: [
            TextButton(
                onPressed: () => context.goNamed(Routes.fldPolicyPage),
                child: const Text('FLD Floating Dictionary')),
            TextButton(
                onPressed: () => context.goNamed(Routes.takeNotePolicyPage),
                child: const Text('Take Note'))
          ]))));

  void downloadResume() async {
    try {
      final data = await rootBundle.load(Assets.files.ahmadSuleimanCv);
      final bytes = data.buffer.asUint8List();

      final blob = web.Blob([bytes.toJS].toJS);
      final url = web.URL.createObjectURL(blob);

      web.HTMLAnchorElement()
        ..href = url
        ..download = 'Ahmad_Suleiman_CV.pdf'
        ..click();

      web.URL.revokeObjectURL(url);
    } catch (e) {
      if (mounted) snackBar(context, 'Error downloading CV: $e');
    }
  }

  String get body => '''
  <body>
    <header>
        <p>Software Engineer · Building solutions that work for everyone</p>
    </header>

    <hr>
    <section>
        <h2>What I Do</h2>
        <p>I build software that solves real problems, especially for people who get left out of the tech conversation. Most of my work focuses on making technology accessible in places with unreliable internet, basic phones, or limited resources.</p>
        
        <p>I've spent a lot of time thinking about what happens when you can't assume everyone has a smartphone or WiFi. That constraint has pushed me to build things differently—SMS platforms for farmers, local network tools that don't need the cloud, and interfaces that work on the simplest devices.</p>
        
        <p><strong>What I work with:</strong> Full-stack development, API design, mobile apps, SMS/USSD systems, and building for accessibility from the ground up.</p>
    </section>

    <hr>
    <section>
        <h2>My Projects</h2>

        <article>
            <h3><a href="https://medium.com/@ahmadumeta4.1/agriask-my-award-winning-innovative-solution-for-africas-talking-agritech-hackathon-d426c17f183b" target="_blank">AgriAsk</a></h3>
            <p><em>Winner, Africa's Talking AgriTech Hackathon</em></p>
            <p>Farmers with basic phones can text questions about crops, pests, or weather and get expert advice back via SMS. No internet needed, no app to download. It won a hackathon, but more importantly, it works in places where most tech solutions don't.</p>
            <p>The idea came from seeing how much agricultural knowledge exists but how little of it reaches the people who actually need it.</p>
        </article>

        <article>
            <h3><a href="https://medium.com/@ahmadumeta4/from-hackathon-win-to-real-world-change-cases-comeback-story-ba24e6c29dae" target="_blank">vCase & CASE Platform</a></h3>
            <p><em>Grand winner, vCon TadHack</em></p>
            <p>Two connected platforms for tracking cases of injustice:</p>
            <ul>
                <li><strong>CASE Platform:</strong> Lets citizens easily reach out to support organizations regarding the issue they are facing.</li>
                <li><strong>vCase:</strong> Gives support organization better tools to manage these cases, collaborate across organizations, and actually follow through to resolution.</li>
            </ul>
            <p>The goal is to make it harder for these cases to fall through the cracks and easier for communities to see progress.</p>
        </article>

        <article>
            <h3><a href="https://youtu.be/BSyg51_xm34?si=8QadQGopTlR5fcdS" target="_blank">AskAll</a></h3>
            <p><em>Excellence in AI Accessibility Recognition</em></p>
            <p>Brings Gemini AI to feature phones through SMS. You text your question, you get an AI-powered answer back. Built specifically for African communities where smartphones aren't the default.</p>
            <p>Everyone's talking about AI access, but most of it assumes you have a good internet connection and a recent phone. This works around that.</p>
        </article>

        <article>
            <h3>Other Things I've Built</h3>
            
            <h4><a href="https://play.google.com/store/apps/details?id=com.meta4projects.fldfloatingdictionary" target="_blank">FLD Floating Dictionary</a></h4>
            <p>A dictionary that floats on top of whatever else you're doing on your phone. Look up words without switching apps or losing your place.</p>
            
            <h4><a href="https://play.google.com/store/apps/details?id=com.meta4projects.takenote" target="_blank">Take Note</a></h4>
            <p>A note-taking app with nested sections for organizing complex projects. Built it because I needed a better way to structure my own thinking.</p>
            
            <h4><a href="https://github.com/Ahmadu-Suleiman/WiPy" target="_blank">WiPy</a></h4>
            <p>Turn any computer into a file server on your local network. Share files with people nearby without uploading to the cloud or fumbling with USB drives.</p>
        </article>
    </section>

    <hr>
    <section>
        <h2>Recognition</h2>
        <ul>
            <li>Winner - AgriTech Hackathon (Africa's Talking) for AgriAsk</li>
            <li>Grand winner, vCon TadHack for vCase/CASE Platform</li>
            <li>Excellence in AI Accessibility for AskAll</li>
            <li>Open source contributor</li>
        </ul>
    </section>

    <hr>
    <section>
        <h2>Get in Touch</h2>
        <div class="contact-grid">
            <div class="contact-item">
                <strong>Email</strong><br>
                <a href="mailto:ahmadumeta4.1@gmail.com">ahmadumeta4.1@gmail.com</a>
            </div>
            <div class="contact-item">
                <strong>Phone</strong><br>
                <a href="tel:+2348138445664">+234 813 844 5664</a>
            </div>
            <div class="contact-item">
                <strong>LinkedIn</strong><br>
                <a href="https://www.linkedin.com/in/ahmad-suleiman-1a209a246/" target="_blank">Ahmad Suleiman</a>
            </div>
            <div class="contact-item">
                <strong>GitHub</strong><br>
                <a href="https://github.com/Ahmadu-Suleiman" target="_blank">@Ahmadu-Suleiman</a>
            </div>
        </div>
        <p style="margin-top: 25px; text-align: center;"><a href="https://linktr.ee/ahmadumeta4" target="_blank">All my links</a></p>
    </section>

    <hr>
    <footer>
        <p>Do reach out!</p>
    </footer>
</body>
''';
}
