import 'package:ahmadu_suleiman/gen/assets.gen.dart';
import 'package:ahmadu_suleiman/utils/extensions.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ReThinkPage extends StatelessWidget {
  const ReThinkPage({super.key});

  final String githubLink =
      'https://github.com/Ahmadu-Suleiman/ReThink/releases/download/update/ReThink.apk';
  final String driveLink =
      'https://drive.google.com/file/d/1Ebrus-qyxHyB0NI-M1fxikcLJikfHmGQ/view?usp=drive_link';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
            child: Padding(
      padding: context.pagePadding,
      child: Column(
        spacing: 12,
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Assets.images.others.reThink.image(height: 100, width: 100),
          Text('ReThink',
              style: context.wordStyle?.addColor(context.primary),
              textAlign: TextAlign.center),
          Text(
              'ReThink is a digital platform that empowers individuals across '
              'Nigeria to adopt practical, measurable sustainability habits. '
              'Through localised guidance on waste reduction, recycling, and '
              'resource-efficient practices, ReThink turns small daily actions '
              'into real community impact.',
              style: context.labelStyle,
              textAlign: TextAlign.center),
          const Divider(),
          Text('Upcoming features', style: context.titleStyle),
          _bulletPoint(
              context,
              'Personalized daily activities: Micro-challenges '
              'tailored to the user’s environment, home type and local climate.'),
          _bulletPoint(
              context,
              'User accounts & progress tracking: Save your profile, track '
              'completed challenges and see simple impact metrics.'),
          _bulletPoint(
              context,
              'Offline + SMS/USSD support: Get and report activities without '
              'internet; sync when connected so feature-phone '
              'users are included.'),
          ElevatedButton.icon(
            icon: const Icon(Icons.download_for_offline_rounded),
            label: const Text('Download ReThink'),
            style: ElevatedButton.styleFrom(
                padding:
                    const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                textStyle: context.actionStyle,
                backgroundColor: context.primary,
                foregroundColor: context.colorScheme.onPrimary),
            onPressed: () {
              launchUrl(Uri.parse(githubLink));

              ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                  duration: Duration(seconds: 10),
                  backgroundColor: context.colorScheme.primaryFixedDim,
                  content: Text.rich(TextSpan(children: [
                    TextSpan(
                        style: context.sentenceStyle,
                        text: 'If your download is yet to start then try using '),
                    TextSpan(
                        text: 'this link.',
                        style: context.sentenceStyle
                            ?.addColor(context.primary)
                            ?.underline,
                        recognizer: TapGestureRecognizer()
                          ..onTap = () {
                            launchUrl(Uri.parse(driveLink));
                            ScaffoldMessenger.of(context).hideCurrentSnackBar();
                          }),
                  ]))));
            },
          ),
        ],
      ),
    )));
  }

  Widget _bulletPoint(BuildContext context, String text) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6.0),
      child: Row(
        spacing: 12,
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Icon(Icons.circle, color: context.primary, size: 8),
          Flexible(
            child: Text(text,
                textAlign: TextAlign.center, style: context.sentenceStyle),
          ),
        ],
      ),
    );
  }
}
