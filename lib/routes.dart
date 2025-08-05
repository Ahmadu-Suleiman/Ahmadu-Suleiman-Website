import 'package:ahmadu_suleiman/pages/csc/csc_personality_page.dart';
import 'package:ahmadu_suleiman/pages/home_page.dart';
import 'package:ahmadu_suleiman/pages/policy_page.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';

import 'models/student.dart';
import 'pages/csc/csc_details_upload_page.dart';

class Routes {
  const Routes._();

  static final _textTheme = GoogleFonts.notoSansTextTheme();
  static const home = '/';
  static const fldPolicy = 'fld-policy';
  static const takeNotePolicy = 'take-note-policy';
  static const hilarityPolicy = 'hilarity-policy';
  static const cscUploadDetailsPage = 'csc-upload-details-page';
  static const cscPersonalityPage = 'csc-personality-page';

  static final GoRouter router = GoRouter(
      onException: (_, state, router) => router.go(home),
      routes: <RouteBase>[
        GoRoute(
            path: home,
            name: home,
            builder: (context, state) => const HomePage(),
            routes: <RouteBase>[
              GoRoute(
                  path: fldPolicy,
                  name: fldPolicy,
                  builder: (context, state) =>
                      const PolicyPage(name: 'FLD Floating Dictionary')),
              GoRoute(
                  path: takeNotePolicy,
                  name: takeNotePolicy,
                  builder: (context, state) =>
                      const PolicyPage(name: 'Take Note')),
              GoRoute(
                  path: hilarityPolicy,
                  name: hilarityPolicy,
                  builder: (context, state) =>
                      const PolicyPage(name: 'Hilarity Jokes')),
              GoRoute(
                  path: cscUploadDetailsPage,
                  name: cscUploadDetailsPage,
                  builder: (context, state) => Theme(
                      data: ThemeData(
                          textTheme: _textTheme,
                          colorScheme:
                              ColorScheme.fromSeed(seedColor: Colors.green)),
                      child: const CscDetailsUploadPage())),
              GoRoute(
                  path: cscPersonalityPage,
                  name: cscPersonalityPage,
                  builder: (context, state) {
                    try {
                      Student student = state.extra as Student;
                      return Theme(
                          data: ThemeData(
                              textTheme: _textTheme,
                              colorScheme: ColorScheme.fromSeed(
                                  seedColor: Colors.green)),
                          child: CscPersonalityPage(student: student));
                    } catch (e) {
                      return Theme(
                          data: ThemeData(
                              textTheme: _textTheme,
                              colorScheme: ColorScheme.fromSeed(
                                  seedColor: Colors.green)),
                          child: const CscDetailsUploadPage());
                    }
                  })
            ])
      ]);
}
