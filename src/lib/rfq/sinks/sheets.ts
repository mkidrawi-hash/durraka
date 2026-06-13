import { google } from 'googleapis'
import type { LeadSink } from './index'
import type { ScoredLead } from '../types'

export class SheetsSink implements LeadSink {
  async write(lead: ScoredLead): Promise<void> {
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const tabName = process.env.GOOGLE_SHEETS_TAB_NAME ?? 'RFQ Submissions'

    if (!clientEmail || !privateKey || !spreadsheetId) {
      throw new Error('Google Sheets env vars are not fully configured.')
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const { data, score } = lead

    // Columns A–R (18 columns)
    // A  Timestamp          B  RFQ Reference      C  Full Name
    // D  Job Title          E  Company Name        F  Email
    // G  Mobile/WhatsApp    H  Project Name        I  Project Location
    // J  Client Type        K  Project Type        L  Estimated Area
    // M  Timeline           N  Required Systems    O  Technical Notes
    // P  Lead Score (0-100) Q  Score Label         R  Source
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:R`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            lead.timestamp,
            lead.reference,
            data.fullName,
            data.jobTitle,
            data.company,
            data.email,
            data.phone,
            data.projectName,
            data.projectLocation,
            data.clientType,
            data.projectType,
            data.estimatedArea,
            data.deliveryDate,
            data.systemRequired,
            data.notes,
            score.value,
            score.label,
            'Durraka Website',
          ],
        ],
      },
    })
  }
}
