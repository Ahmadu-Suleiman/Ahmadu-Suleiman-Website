import 'package:ahmadu_suleiman/pages/csc_personality_page.dart';
import 'package:ahmadu_suleiman/pages/home_page.dart';
import 'package:ahmadu_suleiman/pages/policy_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import 'models/student.dart';
import 'pages/csc_details_upload_page.dart';

class Routes {
  static final GoRouter router = GoRouter(
      onException: (_, state, router) => router.go('/'),
      routes: <RouteBase>[
        GoRoute(
            path: '/',
            builder: (context, state) => const HomePage(),
            routes: <RouteBase>[
              GoRoute(
                  path: 'fld-policy',
                  builder: (context, state) =>
                      const PolicyPage(name: 'FLD Floating Dictionary')),
              GoRoute(
                  path: 'take-note-policy',
                  builder: (context, state) =>
                      const PolicyPage(name: 'Take Note')),
              GoRoute(
                  path: 'hilarity-policy',
                  builder: (context, state) =>
                      const PolicyPage(name: 'Hilarity Jokes')),
              GoRoute(
                  path: 'csc-upload-details-page',
                  builder: (context, state) => Theme(
                      data: ThemeData(
                          fontFamily: 'Lato',
                          colorScheme:
                              ColorScheme.fromSeed(seedColor: Colors.green)),
                      child: const CscDetailsUploadPage())),
              GoRoute(
                  path: 'csc-personality-page',
                  builder: (context, state) {
                    try {
                      Student student = state.extra as Student;
                      return Theme(
                          data: ThemeData(
                              fontFamily: 'Lato',
                              colorScheme: ColorScheme.fromSeed(
                                  seedColor: Colors.green)),
                          child: CscPersonalityPage(student: student));
                    } catch (e) {
                      return Theme(
                          data: ThemeData(
                              fontFamily: 'Lato',
                              colorScheme: ColorScheme.fromSeed(
                                  seedColor: Colors.green)),
                          child: const CscDetailsUploadPage());
                    }
                  })
            ])
      ]);
}
