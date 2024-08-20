import 'package:flutter/material.dart';

class CscPersonalityPage extends StatefulWidget {
  const CscPersonalityPage({super.key});

  @override
  State<CscPersonalityPage> createState() => _CscPersonalityPageState();
}

class _CscPersonalityPageState extends State<CscPersonalityPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(body: SafeArea(child: Column(children: [banner])));
  }

  Widget get banner => Row(children: [
        Image.asset('assets/images/others/kasulogo.png'),
        Column(children: [
          Text('Faculty of Computing Kaduna State University',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  fontWeight: FontWeight.bold,
                  color: Theme.of(context).colorScheme.primary)),
          Text('CSC CLASS OF 2024',
              style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                  letterSpacing: 1,
                  color: Theme.of(context).colorScheme.primary)),
          const SizedBox(height: 20),
          Text('Computer Scientist of the day!',
              style: Theme.of(context).textTheme.displayLarge?.copyWith(
                  fontStyle: FontStyle.italic,
                  color: Theme.of(context).colorScheme.primary))
        ])
      ]);
}
