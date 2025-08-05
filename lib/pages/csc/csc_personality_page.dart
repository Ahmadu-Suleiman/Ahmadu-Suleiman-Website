import 'package:ahmadu_suleiman/utils/extensions.dart';
import 'package:file_saver/file_saver.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:screenshot/screenshot.dart';

import '../../models/student.dart';

class CscPersonalityPage extends StatefulWidget {
  const CscPersonalityPage({super.key, required this.student});

  final Student student;

  @override
  State<CscPersonalityPage> createState() => _CscPersonalityPageState();
}

class _CscPersonalityPageState extends State<CscPersonalityPage> {
  late final Student student;
  final controllerImage = ScreenshotController();

  @override
  void initState() {
    super.initState();
    student = widget.student;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
            child: SingleChildScrollView(
                child: Column(children: [
      Align(
          alignment: Alignment.topLeft,
          child: SingleChildScrollView(
              scrollDirection: Axis.horizontal, child: flyerWidget)),
      generatorButton
    ]))));
  }

  void preview() => controllerImage.capture().then((bytes) {
        if (mounted) {
          showDialog(
              context: context,
              builder: (context) => AlertDialog(
                      title: Text('Flyer preview'),
                      content: Image.memory(bytes!),
                      actions: [
                        TextButton(
                            onPressed: () => context.pop(),
                            child: Text('Cancel'))
                      ]));
        }
      });

  void saveImage() =>
      controllerImage.capture().then((bytes) => FileSaver.instance.saveFile(
          name: '${student.fullName} CSC Personality Flyer ${DateTime.now()}',
          bytes: bytes,
          fileExtension: '.png',
          mimeType: MimeType.png));

  Widget get flyerWidget => Screenshot(
      controller: controllerImage,
      child: Container(
          decoration: BoxDecoration(
              color: context.colorScheme.surface,
              border: Border.all(color: context.colorScheme.primary, width: 1)),
          child: IntrinsicWidth(
              child: IntrinsicHeight(
                  child: Container(
                      decoration: BoxDecoration(
                          image: DecorationImage(
                              image: const AssetImage(
                                  'assets/images/others/background.png'),
                              fit: BoxFit.cover,
                              colorFilter: ColorFilter.mode(
                                  context.colorScheme.primary.withAlpha(25),
                                  BlendMode.srcIn))),
                      child: Stack(children: [
                        Container(
                            color: context.colorScheme.onPrimaryContainer,
                            width: 60,
                            height: double.infinity),
                        Column(children: [
                          banner,
                          const Divider(indent: 20, endIndent: 20),
                          body,
                          bottom
                        ])
                      ]))))));

  Widget get generatorButton => Column(spacing: 20, children: [
        Divider(height: 0, thickness: 4, color: context.primary),
        const Center(
            child: Padding(
                padding: EdgeInsets.all(20),
                child: Text(
                    textAlign: TextAlign.center,
                    "Please note: After clicking 'Generate', there may be a "
                    "brief pause while your flyer is created. Once ready, "
                    "it will be displayed. If you encounter any issues, try "
                    "clicking 'Preview' for a viewable version you can "
                    "screenshot."))),
        Row(
            spacing: 20,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                      backgroundColor: context.colorScheme.primaryContainer),
                  onPressed: preview,
                  label: const Text('Preview'),
                  icon: const Icon(Icons.image)),
              ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                      backgroundColor: context.colorScheme.primaryContainer),
                  onPressed: saveImage,
                  label: const Text('Generate'),
                  icon: const Icon(Icons.download))
            ]),
      ]);

  Widget get banner => Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
        Image.asset('assets/images/others/kasulogo.png',
            height: 200, width: 200),
        const SizedBox(width: 20),
        Column(children: [
          Text('CSC CLASS OF 2024',
              style: context.textTheme.headlineMedium?.copyWith(
                  letterSpacing: 1, color: context.colorScheme.primary)),
          Text('Faculty of Computing Kaduna State University',
              style: context.textTheme.bodyMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: context.colorScheme.primary)),
          Divider(height: 30, color: context.colorScheme.primary),
          Text('Computer Scientist of the day!',
              style: context.textTheme.displayMedium?.copyWith(
                  fontStyle: FontStyle.italic,
                  fontWeight: FontWeight.bold,
                  color: context.colorScheme.primary))
        ])
      ]));

  Widget get body => Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [imageDisplay, details]);

  Widget get bottom => Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8),
      child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
        TextButton.icon(
            onPressed: () => context.go('/'),
            label: const Text('By Ahmad Suleiman'),
            icon: const Icon(Icons.image))
      ]));

  Widget get imageDisplay => Column(children: [
        Padding(
            padding: const EdgeInsets.all(8),
            child: Column(children: [
              Container(
                  decoration: BoxDecoration(
                      border: Border.all(
                          color: context.colorScheme.primary, width: 4),
                      borderRadius: BorderRadius.circular(8),
                      image: DecorationImage(
                          image: MemoryImage(student.image),
                          fit: BoxFit.cover)),
                  width: 300,
                  height: 400),
              SizedBox(
                  width: 400,
                  child: Padding(
                      padding: const EdgeInsets.all(8),
                      child: Center(
                          child: Text(student.fullName,
                              textAlign: TextAlign.center,
                              style: context.textTheme.titleLarge?.copyWith(
                                  fontWeight: FontWeight.bold,
                                  fontStyle: FontStyle.italic,
                                  color: context.colorScheme.secondary)))))
            ]))
      ]);

  Widget get details => Padding(
      padding: const EdgeInsets.all(8),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        text('NAME', student.fullName),
        text('NICKNAME', student.nickname),
        text('DATE OF BIRTH', student.dob),
        text('STATE OF ORIGIN', student.origin),
        text('HOBBIES', student.hobbies),
        text('BUSINESS/SKILLS', student.work),
        text('RELATIONSHIP STATUS', student.relationship),
        text('CLASS CRUSH', student.crush),
        text('IG HANDLE', student.ig),
        text('MOST STRESSFUL LEVEL', student.stressfulLevel),
        text('BEST MOMENT ON CAMPUS', student.bestMoment),
        text('FAVOURITE COURSE', student.course),
        text('FAVOURITE LECTURER', student.lecturer),
        text('IF NOT COMPUTER SCIENCE, WHAT ELSE', student.whatElse),
        text('FAVOURITE QUOTE', student.quote)
      ]));

  Widget text(String label, String value) => Padding(
      padding: const EdgeInsets.all(8),
      child: RichText(
          text: TextSpan(
              text: '$label: ',
              style: context.textTheme.bodyMedium?.copyWith(
                  fontWeight: FontWeight.bold, color: context.primary),
              children: <TextSpan>[
            TextSpan(
                text: value,
                style: context.textTheme.bodyMedium
                    ?.copyWith(color: context.colorScheme.onPrimaryContainer))
          ])));
}
