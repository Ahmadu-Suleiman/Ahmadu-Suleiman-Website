import 'package:ahmad_suleiman/others/student.dart';
import 'package:flutter/material.dart';

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
    return Scaffold(body: SafeArea(child: Column(children: [banner, body])));
  }

  Widget get banner => Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Image.asset('assets/images/others/kasulogo.png',
                height: 200, width: 200),
            const SizedBox(width: 20),
            Column(children: [
              Text('Faculty of Computing Kaduna State University',
                  style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).colorScheme.primary)),
              Text('CSC CLASS OF 2024',
                  style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                      letterSpacing: 1,
                      color: Theme.of(context).colorScheme.primary)),
              const SizedBox(height: 20),
              Text('Computer Scientist of the day!',
                  style: Theme.of(context).textTheme.displayMedium?.copyWith(
                      fontStyle: FontStyle.italic,
                      color: Theme.of(context).colorScheme.primary))
            ])
          ]);

  Widget get body => Row(children: [
        imageDisplay,
        const VerticalDivider(color: Colors.black, indent: 50, endIndent: 50),
        Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          text('NAME', '${student.firstname} ${student.lastname}'),
          text('NICKNAME', student.nickname),
          text('STATE OF ORIGIN', student.origin),
          text('HOBBIES', student.hobbies),
          text('RELATIONSHIP STATUS', student.relationship),
          text('CLASS CRUSH', student.crush),
          text('IG HANDLE', student.ig),
          text('MOST STRESSFUL LEVEL', student.stressfulLevel),
          text('FAVOURITE COURSE', student.course),
          text('FAVOURITE LECTURER', student.lecturer),
          text('IF NOT COMPUTER SCIENCE, WHAT ELSE', student.whatElse),
          text('FAVOURITE QUOTE', student.quote)
        ])
      ]);

  Widget get imageDisplay => Column(children: [
        Container(
            decoration: BoxDecoration(
                border: Border.all(color: Colors.white, width: 2.0),
                image: const DecorationImage(
                    image: AssetImage('assets/images/others/kasulogo.png'),
                    fit: BoxFit.cover)),
            width: 400,
            height: 200)
      ]);

  Widget text(String label, String value) => RichText(
          text: TextSpan(
              text: '$label: ',
              style: Theme.of(context)
                  .textTheme
                  .bodyMedium
                  ?.copyWith(fontWeight: FontWeight.bold),
              children: <TextSpan>[
            TextSpan(text: value, style: Theme.of(context).textTheme.bodyMedium)
          ]));
}
