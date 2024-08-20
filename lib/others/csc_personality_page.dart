import 'package:flutter/material.dart';

class CscPersonalityPage extends StatefulWidget {
  const CscPersonalityPage({super.key});

  @override
  State<CscPersonalityPage> createState() => _CscPersonalityPageState();
}

class _CscPersonalityPageState extends State<CscPersonalityPage> {
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
        Expanded(child: Container(color: Colors.orange))
      ]);

  Widget get imageDisplay => Column(children: [
        Container(
            decoration: BoxDecoration(
                border: Border.all(color: Colors.black, width: 2.0),
                image: const DecorationImage(
                    image: AssetImage('assets/images/others/kasulogo.png'),
                    fit: BoxFit.cover)),
            width: 400,
            height: 200)
      ]);
}
