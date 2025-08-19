import 'package:ahmadu_suleiman/utils/extensions.dart';
import 'package:flutter/material.dart';

class ReThinkPage extends StatelessWidget {
  const ReThinkPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
            child: Column(
      spacing: 12,
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Assets.
        Text('ReThink',
            style: context.wordStyle?.withColor(context.primary),
            textAlign: TextAlign.center),
        Text(
            'ReThink is a digital platform that empowers individuals across '
            'Nigeria to adopt practical, measurable sustainability habits. '
            'Through localised guidance on waste reduction, recycling, and '
            'resource-efficient practices, ReThink turns small daily actions '
            'into real community impact.',
            style: context.labelStyle,
            textAlign: TextAlign.center),
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
              padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
              textStyle: context.actionStyle,
              backgroundColor: context.primary,
              foregroundColor: context.colorScheme.onPrimary),
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Downloading')),
            );
          },
        ),
      ],
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
          Text(text, style: context.sentenceStyle),
        ],
      ),
    );
  }
}
