import 'package:ahmad_suleiman/others/student.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class CscPersonalityPage extends StatefulWidget {
  const CscPersonalityPage({super.key, required this.student});

  final Student student;

  @override
  State<CscPersonalityPage> createState() => _CscPersonalityPageState();
}

class _CscPersonalityPageState extends State<CscPersonalityPage> {
  late final Student student;

  @override
  void initState() {
    super.initState();
    student = widget.student;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
            child: Stack(children: [
      Container(
          color: Theme.of(context).colorScheme.onPrimaryContainer,
          width: 40,
          height: double.infinity),
      Column(children: [banner, body, const Spacer(), bottom])
    ])));
  }

  Widget get banner =>
      Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
        Image.asset('assets/images/others/kasulogo.png',
            height: 200, width: 200),
        const SizedBox(width: 20),
        Column(children: [
          Text('CSC CLASS OF 2024',
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  letterSpacing: 1,
                  color: Theme.of(context).colorScheme.primary)),
          Text('Faculty of Computing Kaduna State University',
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Theme.of(context).colorScheme.primary)),
          const SizedBox(height: 20),
          Text('Computer Scientist of the day!',
              style: Theme.of(context).textTheme.displayMedium?.copyWith(
                  fontStyle: FontStyle.italic,
                  color: Theme.of(context).colorScheme.primary))
        ])
      ]);

  Widget get body => Row(children: [imageDisplay, details]);

  Widget get bottom => Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8),
      child: GestureDetector(
          onTap: () => context.go('/'),
          child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
            Text('By Ahmad Suleiman',
                style: Theme.of(context).textTheme.labelLarge?.copyWith(
                    color: Theme.of(context).colorScheme.onPrimaryContainer,
                    decoration: TextDecoration.underline))
          ])));

  Widget get imageDisplay => Column(children: [
        Padding(
            padding: const EdgeInsets.all(8),
            child: Column(children: [
              Container(
                  decoration: BoxDecoration(
                      border: Border.all(
                          color: Theme.of(context).colorScheme.primary,
                          width: 4),
                      borderRadius: BorderRadius.circular(8),
                      image: const DecorationImage(
                          image: AssetImage('assets/images/moi.png'),
                          fit: BoxFit.cover)),
                  width: 300,
                  height: 400),
              Padding(
                  padding: const EdgeInsets.all(8),
                  child: Text(student.fullName,
                      style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                          fontStyle: FontStyle.italic,
                          color: Theme.of(context).colorScheme.primary)))
            ]))
      ]);

  Widget get details => Padding(
      padding: const EdgeInsets.all(8),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        text('NAME', student.fullName),
        text('NICKNAME', student.nickname),
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
              style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Theme.of(context).colorScheme.primary),
              children: <TextSpan>[
            TextSpan(
                text: value,
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                    color: Theme.of(context).colorScheme.onPrimaryContainer))
          ])));
}
