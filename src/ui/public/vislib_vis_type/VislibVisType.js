import _ from 'lodash';
import 'ui/vislib';
import 'plugins/kbn_vislib_vis_types/controls/vislib_basic_options';
import 'plugins/kbn_vislib_vis_types/controls/point_series_options';
import 'plugins/kbn_vislib_vis_types/controls/line_interpolation_option';
import VisSchemasProvider from 'ui/Vis/Schemas';
import VisVisTypeProvider from 'ui/Vis/VisType';
import AggResponsePointSeriesPointSeriesProvider from 'ui/agg_response/point_series/point_series';
import VislibVisTypeVislibRenderbotProvider from 'ui/vislib_vis_type/VislibRenderbot';
export default function VislibVisTypeFactory(Private) {

  var VisTypeSchemas = Private(VisSchemasProvider);
  var VisType = Private(VisVisTypeProvider);
  var pointSeries = Private(AggResponsePointSeriesPointSeriesProvider);
  var VislibRenderbot = Private(VislibVisTypeVislibRenderbotProvider);


  _.class(VislibVisType).inherits(VisType);
  function VislibVisType(opts) {
    opts = opts || {};

    VislibVisType.Super.call(this, opts);

    if (this.responseConverter == null) {
      this.responseConverter = pointSeries;
    }

    this.listeners = opts.listeners || {};
  }

  VislibVisType.prototype.createRenderbot = function (vis, $el, uiState) {
    return new VislibRenderbot(vis, $el, uiState);
  };

  return VislibVisType;
};