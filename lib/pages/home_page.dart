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
                style: context.wordStyle
                    ?.addColor(context.colorScheme.onSurface)),
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
                                  Text(
                                      'PS: This person above is Ahmad Suleiman',
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
                if (index == 1) context.pushNamed(Routes.reThinkPage);
                if (index == 2) showPolicyDialog();
                if (index == 3) context.pushNamed(Routes.cscUploadDetailsPage);
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
                onPressed: () => context.pushNamed(Routes.fldPolicy),
                child: const Text('FLD Floating Dictionary')),
            TextButton(
                onPressed: () => context.pushNamed(Routes.takeNotePolicy),
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
        <p><strong>Software Engineer · Digital Solutions Architect · 
        Impact-Driven Technologist</strong></p>
    </header>

    <hr>
    <section>
        <h2>About Me</h2>
        <p>I'm Ahmad Suleiman, a problem-solver at heart who transforms complex 
        challenges into elegant digital solutions. My work spans the 
        intersection of technology and social impact, from empowering 
        smallholder farmers in remote areas to building platforms that amplify 
        community voices and democratize access to AI.</p>
        
        <p>I specialize in creating resilient, human-centered software that 
        works even in constrained environments. Whether it's developing 
        SMS-based platforms for users without internet access or building 
        local-network tools that bypass cloud dependencies, I believe the best 
        innovations emerge when technical excellence meets real-world 
        constraints.</p>
        
        <p><strong>Core Expertise:</strong> Full-stack development, API design, 
        mobile applications, SMS/USSD systems, data analysis, and 
        accessibility-first design.</p>
    </section>
    <hr>

    <section>
        <h2>Featured Projects & Achievements</h2>

        <article>
            <h3><a href="https://medium.com/@ahmadumeta4.1/agriask-my-award-winning-innovative-solution-for-africas-talking-agritech-hackathon-d426c17f183b" target="_blank">AgriAsk</a></h3>
            <p><em>Winner, Africa's Talking AgriTech Hackathon</em></p>
            <p>An SMS-based agricultural consultation platform that delivers 
            expert farming advice on crops, pest management, and weather 
            patterns, no internet required. Designed to boost agricultural 
            yields, reduce crop losses, and improve rural livelihoods across 
            under-connected regions.</p>
            <p><strong>Impact:</strong> Empowering smallholder farmers with 
            instant access to agricultural expertise through basic mobile phones.</p>
        </article>

        <hr>

        <article>
            <h3><a href="https://medium.com/@ahmadumeta4/from-hackathon-win-to-real-world-change-cases-comeback-story-ba24e6c29dae" target="_blank">vCase & CASE Platform</a></h3>
            <p><em>Grand winner, vCon TadHack</em></p>
            <p>A comprehensive dual ecosystem for justice and accountability:</p>
            <ul>
                <li><strong>CASE Platform:</strong> 
                A citizen-driven portal enabling communities to report, document, 
                and track cases of abuse, corruption, and social injustice with 
                full transparency.</li>
                <li><strong>vCase:</strong> A modular 
                toolkit that uses vCon to empower NGOs, civic organizations, 
                and advocacy groups to efficiently manage, collaborate on, and 
                resolve cases at scale, always centering the voices of those 
                affected.</li>
            </ul>
            <p><strong>Impact:</strong> Bridging the gap between grassroots reporting and institutional response for systemic change.</p>
        </article>

        <hr>
        <article>
            <h3><a href="https://youtu.be/BSyg51_xm34?si=8QadQGopTlR5fcdS" target="_blank">AskAll</a></h3>
            <p><em>Excellence in AI Accessibility Recognition</em></p>
            <p>A revolutionary platform that brings Gemini AI capabilities to 
            feature phones via SMS, specifically designed for African 
            communities with limited internet connectivity. Breaks down digital 
            barriers by making advanced AI tools accessible to users regardless 
            of their device or connection quality.</p>
            <p><strong>Impact:</strong> Democratizing AI access for millions 
            who were previously excluded from the AI revolution.</p>
        </article>
        <hr>

        <article>
            <h3>Additional Innovations</h3>
            
            <h4><a href="https://play.google.com/store/apps/details?id=com.meta4projects.fldfloatingdictionary" target="_blank">FLD Floating Dictionary</a></h4>
            <p>A lightweight, always-on-top floating dictionary that provides 
            instant word definitions without leaving your current app, perfect 
            for seamless learning and continuous focus.</p>
            
            <h4><a href="https://play.google.com/store/apps/details?id=com.meta4projects.takenote" target="_blank">Take Note</a></h4>
            <p>An intelligently organized note-taking application featuring 
            nested subsections and hierarchical structure, designed for complex 
            thinking and project management.</p>
            
            <h4><a href="https://github.com/Ahmadu-Suleiman/WiPy" target="_blank">WiPy</a></h4>
            <p>A minimalist web application that transforms any computer into 
            a local-network file server, enabling instant file sharing within 
            Wi-Fi networks without cloud dependencies or external devices.</p>
        </article>
    </section>

    <hr>

    <section>
        <h2>Awards & Recognition</h2>
        <ul>
            <li><strong>Winner</strong> - AgriTech Hackathon (Africa's Talking) for <em>AgriAsk</em></li>
            <li><strong>Grand winner, vCon TadHack</strong> - Innovation Challenge for <em>vCase/CASE Platform</em></li>
            <li><strong>Excellence in AI Accessibility</strong> - Recognition for <em>AskAll</em></li>
            <li><strong>Open Source Contributor</strong> - Active contributions to developer community</li>
        </ul>
    </section>

    <hr>

    <section>
        <h2>Technical Philosophy</h2>
    
        <p>I believe in building lean, resilient solutions that prioritize 
        human needs over technical complexity. My approach focuses on:</p>
        <ul>
            <li><strong>Accessibility-first design</strong> that works across all devices and connection types</li>
            <li><strong>Constraint-driven innovation</strong> that turns limitations into competitive advantages</li>
            <li><strong>Community-centered development</strong> that amplifies local voices and needs</li>
            <li><strong>Sustainable impact</strong> through scalable, maintainable architectures</li>
        </ul>
    </section>

    <hr>

    <section>
        <h2>Let's Connect</h2>
        <p><strong>Phone:</strong> <a href="tel:+2348138445664">+234 813 844 5664</a></p>
        <p><strong>Email:</strong> <a href="mailto:ahmadumeta4.1@gmail.com">ahmadumeta4.1@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ahmad-suleiman-1a209a246/" target="_blank">Ahmad Suleiman</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Ahmadu-Suleiman" target="_blank">@Ahmadu-Suleiman</a></p>
        <p><strong>My other stuff:</strong> <a href="https://linktr.ee/ahmadumeta4" target="_blank">Linktree</a></p>
    </section>

    <hr>

    <footer>
        <p><em>"Don't forget to reach out!"</em></p>
    </footer>
</body>
''';
}
